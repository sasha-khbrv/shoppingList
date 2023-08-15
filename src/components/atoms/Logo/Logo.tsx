import React, { FC } from "react";
import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <img src={"logo.png"} alt="" />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/sasha-khbrv/shoppinggList"
      >
        GitHub
      </a>
    </div>
  );
};
export default Logo;
