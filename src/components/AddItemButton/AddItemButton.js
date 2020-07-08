import React from "react";
import styles from "../AddItemButton/AddItemButton.module.css";
import { connect } from "react-redux";
import { MODAL_IS_OPEN } from "../../store/constans/constants";

const AddItemButton = ({ openModal }) => {
  return (
    <div onClick={openModal} className={styles.button}>
      <span>Add New Item</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch({ type: MODAL_IS_OPEN }),
});

export default connect(null, mapDispatchToProps)(AddItemButton);
