import React from "react";
import styles from "../AddItemButton/AddItemButton.module.css";

const AddItemButton = () => {
  const addNewItem = () => {
    console.log("hi");
  };

  return (
    <div onClick={addNewItem} className={styles.button}>
      <span>Add New Item</span>
    </div>
  );
};

export default AddItemButton;
