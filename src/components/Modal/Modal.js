import React from "react";
import styles from "../Modal/Modal.module.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { MODAL_IS_CLOSED } from "../../store/constans/constants";

const validate = ({ name }) => {
  const errors = {};
  if (!name) {
    errors.name = "Required";
  } else if (name.length > 20) {
    errors.name = "Must be 20 characters or less";
  } else if (name.trim() === "") {
    errors.name = "That's an error";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <p>{error}</p>}
    </div>
  </div>
);

let Modal = ({ handleSubmit, closeModal }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.modalBody}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" component={renderField} type="text" />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <Field name="title" component={renderField} type="text" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field name="description" component={renderField} type="text" />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <Field name="image" component={renderField} type="text" />
          </div>
          <button className={styles.button} type="submit">
            Add
          </button>
          <button onClick={closeModal} className={styles.button}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

Modal = reduxForm({
  form: "item_form",
  validate,
})(Modal);

// const mapStateToProps = (state) => ({
//   dataItems: state.reducer.items,
// });

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch({ type: MODAL_IS_CLOSED }),
  // takeItem: () => dispatch({type:})
});

export default connect(null, mapDispatchToProps)(Modal);
