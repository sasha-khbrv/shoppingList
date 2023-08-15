import React, { ChangeEvent, FC, useState } from "react";
import Button from "components/atoms/Button";
import { useDispatch } from "react-redux";
import { addItem } from "store/reducers/shoppingList";
import { ItemType } from "types/types";
import AddIcon from "components/atoms/Icons/AddIcon";
import InputField from "../InputField/InputField";
import classNames from "classnames";
import styles from "./NewItemForm.module.scss";
import validateAllFormInputs from "helpers/validateAllFormInputs";

const DEFAULT_ITEM = {
  name: "",
  amount: 1,
};

type Props = { className?: string };

const NewItemForm: FC<Props> = ({ className }) => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState<Omit<ItemType, "id">>(DEFAULT_ITEM);
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );

  const handleAddItem = () => {
    const [result, isOk] = validateAllFormInputs(fields);
    setErrors(result);
    if (isOk) {
      dispatch(addItem(fields));
      setFields(DEFAULT_ITEM);
    }
  };

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const formClasses = classNames(styles.container, className);

  return (
    <form className={formClasses}>
      <InputField
        type="text"
        value={fields.name}
        onChange={handleChangeField}
        id="newItemName"
        name="name"
        placeholder="New item"
        error={errors?.["name"]}
      />
      <InputField
        type="number"
        value={fields.amount}
        onChange={handleChangeField}
        id="newItemAmount"
        name="amount"
        min={1}
        error={errors?.["amount"]}
      />
      <Button
        id="newItemAdd"
        type="button"
        onClick={handleAddItem}
        icon={AddIcon}
      >
        Add
      </Button>
    </form>
  );
};
export default NewItemForm;
