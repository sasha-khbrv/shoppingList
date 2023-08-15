import React, { FC } from "react";
import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <img src={"logo.png"} alt="" />
    </div>
  );
};
export default Logo;
