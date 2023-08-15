import React, { ChangeEvent, FC, useState } from "react";
import Button from "components/atoms/Button";
import { ItemType } from "types/types";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "store/reducers/shoppingList";
import DeleteIcon from "components/atoms/Icons/DeleteIcon";
import InputField from "../InputField/InputField";
import classNames from "classnames";

import styles from "./ItemRow.module.scss";
import validateFormInput from "helpers/validateFormInput";

type Props = ItemType & { className?: string };

const ItemRow: FC<Props> = (props) => {
  const { id, name, amount, className } = props;
  const dispatch = useDispatch();
  const [fields, setFields] = useState<ItemType>({ id, name, amount });
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );

  const handleRemoveItem = () => {
    dispatch(removeItem(fields));
  };

  const handleEditItem = (field: string, value: string | number) => {
    const validation = validateFormInput(field, value);
    setErrors({ ...errors, [field]: validation });

    if (validation || (props as { [key: string]: any })[field] === value) {
      return;
    }

    dispatch(editItem(fields));
  };

  const handleResetChange = () => {
    setFields({ id, name, amount });
  };

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const rowClasses = classNames(styles.row, className);

  return (
    <li className={rowClasses}>
      <InputField
        type="text"
        value={fields.name}
        onChange={handleChangeField}
        onConfirm={handleEditItem}
        onReset={handleResetChange}
        id={id + "name"}
        name={"name"}
        error={errors?.["name"]}
      />
      <InputField
        type="number"
        value={fields.amount}
        onChange={handleChangeField}
        onConfirm={handleEditItem}
        onReset={handleResetChange}
        id={id + "amount"}
        name={"amount"}
        min={1}
        error={errors?.["amount"]}
      />
      <Button
        id={id + "itemRemove"}
        type="button"
        onClick={handleRemoveItem}
        icon={DeleteIcon}
      />
    </li>
  );
};
export default ItemRow;
