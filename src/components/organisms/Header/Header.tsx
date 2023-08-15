import { FC } from "react";
import Logo from "../../atoms/Logo/Logo";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <Logo />
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
export default Header;
