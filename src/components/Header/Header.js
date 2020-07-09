import React from "react";
import styles from "../Header/Header.module.css";
import AddItemButton from "../AddItemButton/AddItemButton";

const Header = ({ toggleModalHandler }) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <span className={styles.logo}>Logo</span>
        <AddItemButton toggleModalHandler={toggleModalHandler} />
      </div>
    </header>
  );
};

export default Header;
