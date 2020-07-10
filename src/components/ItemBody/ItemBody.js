import React from "react";
import styles from "../Item/Item.module.css";

const ItemBody = ({
  id,
  image,
  name,
  title,
  description,
  onEditToggleHandler,
}) => {
  return (
    <div id={id} className={styles.item}>
      <img alt="Item" width="250" src={image} />
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={onEditToggleHandler} className={styles.button}>
        EDIT
      </button>
    </div>
  );
};

export default ItemBody;
