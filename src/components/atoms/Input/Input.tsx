import React, {
  FC,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useRef,
} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

type Props = {
  id: string;
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onConfirm?: (field: string, value: string | number) => void;
  onReset?: () => void;
  isError: boolean;
  disabled?: boolean;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({
  onConfirm = () => undefined,
  onReset = () => undefined,
  label,
  isError,
  disabled = true,
  onBlur,
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleForceBlur = () => {
    // force input to lose focus after user clickes Enter
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onConfirm(name, value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      onReset();
      handleForceBlur();
    }
    if (event.key === "Enter") {
      onConfirm(restProps.name, restProps.value);
      handleForceBlur();
    }
  };

  const inputClasses = classNames(styles.inputItem, {
    [styles.error]: isError,
  });

  return (
    <input
      ref={inputRef}
      className={inputClasses}
      onKeyDown={handleKeyDown}
      onBlur={onBlur || handleBlur}
      {...restProps}
    />
  );
};
export default Input;
