import React, { FC, ReactNode } from "react";
import Header from "../../organisms/Header/Header";
import styles from "./GenericLayout.module.scss";

type Props = {
  children: ReactNode;
};

const GenericLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
};
export default GenericLayout;
