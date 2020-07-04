import React from "react";
import styles from "../Header/Header.module.css";
import AddItemButton from "../AddItemButton/AddItemButton";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <span className={styles.logo}>Logo</span>
        <AddItemButton />
      </div>
    </header>
  );
};

export default Header;
