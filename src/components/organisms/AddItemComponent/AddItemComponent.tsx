import NewItemForm from "components/molecules/NewItemForm/NewItemForm";
import { FC } from "react";
import styles from "./AddItemComponent.module.scss";

const AddItemComponent: FC = () => {
  return (
    <div className={styles.container}>
      <h2>Add New Item</h2>
      <NewItemForm className={styles.formContainer} />
    </div>
  );
};
export default AddItemComponent;
