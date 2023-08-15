import React, { FC, ChangeEvent, FocusEvent } from "react";
import styles from "./InputField.module.scss";
import Input from "components/atoms/Input/Input";
import FieldError from "components/atoms/FieldError/FieldError";

type Props = {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onConfirm?: (field: string, value: string | number) => void;
  onReset?: () => void;
  error?: string;
  disabled?: boolean;
  min?: number;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
};

const InputField: FC<Props> = ({ error, ...restProps }) => {
  return (
    <label className={styles.container}>
      <Input isError={!!error} {...restProps} />
      {error && <FieldError error={error} />}
    </label>
  );
};
export default InputField;
