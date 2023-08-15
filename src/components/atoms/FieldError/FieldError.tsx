import React, { FC } from "react";
import styles from "./FieldError.module.scss";

type Props = {
  error: string;
};

const FieldError: FC<Props> = ({ error }) => {
  return <span className={styles.errorMessage}>{error}</span>;
};
export default FieldError;
