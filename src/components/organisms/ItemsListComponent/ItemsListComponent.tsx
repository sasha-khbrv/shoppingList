import ItemRow from "components/molecules/ItemRow/ItemRow";
import { FC } from "react";
import { useSelector } from "react-redux";
import styles from "./ItemsListComponent.module.scss";

const ItemsListComponent: FC = () => {
  const items = useSelector((state: any) => state.shoppingList.items);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Name</span>
        <span>Amount</span>
      </div>
      <ul className={styles.list}>
        {items.map((item: any) => (
          <ItemRow key={item.id} className={styles.listItem} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemsListComponent;
