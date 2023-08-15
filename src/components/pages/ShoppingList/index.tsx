import React, { FC } from "react";
import withLayout from "../../../helpers/hocs/withLayout";
import ItemsListComponent from "components/organisms/ItemsListComponent/ItemsListComponent";
import AddItemComponent from "components/organisms/AddItemComponent/AddItemComponent";
import styles from "./ShoppingList.module.scss";

const ShoppingList: FC = () => {
  return (
    <div className={styles.container}>
      <h1>Shopping List</h1>
      <ItemsListComponent />
      <AddItemComponent />
    </div>
  );
};
export default withLayout(ShoppingList);
