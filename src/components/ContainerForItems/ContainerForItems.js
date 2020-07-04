import React from "react";
import styles from "../ContainerForItems/ContainerForItems.module.css";
import Item from "../Item/Item";

const ContainerForItems = () => {
  return (
    <section className={styles.body}>
      <div className={styles.inner}>
        <Item
          imageSrc={
            "https://apelsinka-rezept.ru/wp-content/uploads/domashniy-hot-dog.jpg"
          }
        />
        <Item
          imageSrc={
            "https://apelsinka-rezept.ru/wp-content/uploads/domashniy-hot-dog.jpg"
          }
        />
        <Item
          imageSrc={
            "https://apelsinka-rezept.ru/wp-content/uploads/domashniy-hot-dog.jpg"
          }
        />
        <Item
          imageSrc={
            "https://apelsinka-rezept.ru/wp-content/uploads/domashniy-hot-dog.jpg"
          }
        />
        <Item
          imageSrc={
            "https://apelsinka-rezept.ru/wp-content/uploads/domashniy-hot-dog.jpg"
          }
        />
        <Item
          imageSrc={
            "https://apelsinka-rezept.ru/wp-content/uploads/domashniy-hot-dog.jpg"
          }
        />
        <Item
          imageSrc={
            "https://apelsinka-rezept.ru/wp-content/uploads/domashniy-hot-dog.jpg"
          }
        />
        <Item
          imageSrc={
            "https://apelsinka-rezept.ru/wp-content/uploads/domashniy-hot-dog.jpg"
          }
        />
      </div>
    </section>
  );
};

export default ContainerForItems;
