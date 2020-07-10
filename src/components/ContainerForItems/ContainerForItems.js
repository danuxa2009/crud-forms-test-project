import React from "react";
import styles from "../ContainerForItems/ContainerForItems.module.css";
import Item from "../Item/Item";

const ContainerForItems = ({ items }) => {
  const itemElemens = items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      image={item.image}
      title={item.title}
      description={item.description}
    />
  ));
  return (
    <section className={styles.body}>
      <div className={styles.inner}>{itemElemens}</div>
    </section>
  );
};

export default ContainerForItems;
