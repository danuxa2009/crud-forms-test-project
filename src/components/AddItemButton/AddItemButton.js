import React from "react";
import styles from "../AddItemButton/AddItemButton.module.css";

const AddItemButton = ({ toggleModalHandler }) => {
  return (
    <div onClick={toggleModalHandler} className={styles.button}>
      <span>Add New Item</span>
    </div>
  );
};

export default AddItemButton;
