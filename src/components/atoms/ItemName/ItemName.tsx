import React, { FC } from "react";
import styles from "./ItemName.module.scss";

type Props = {
  name: string;
};

const ItemName: FC<Props> = ({ name }) => {
  return <span>{name}</span>;
};

export default ItemName;
