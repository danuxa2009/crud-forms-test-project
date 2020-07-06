import React from "react";
import styles from "../Modal/Modal.module.css";
import { connect } from "react-redux";
import { MODAL_IS_CLOSED } from "../../store/constans/constants";

const Modal = (props) => {
  return (
    <div className={styles.outer}>
      <div className={styles.modalBody}>
        <button className={styles.button}>Add</button>
        <button onClick={props.closeModal} className={styles.button}>
          Close
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: MODAL_IS_CLOSED }),
});

export default connect(null, mapDispatchToProps)(Modal);
