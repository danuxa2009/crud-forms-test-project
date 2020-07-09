import React from "react";
import styles from "../Modal/Modal.module.css";
import { Field, reduxForm } from "redux-form";

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
      <input {...input} type={type} />
      {touched && error && <p>{error}</p>}
    </div>
  </div>
);

const idField = ({ type, input, label }) => (
  <div>
    <label>{label}</label>
    <div>
      <input disabled {...input} type={type} value={Date.now()} />
    </div>
  </div>
);

let Modal = ({ handleSubmit, pristine, submitting, toggleModalHandler }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.modalBody}>
        <form onSubmit={handleSubmit}>
          <Field label="Name" name="name" component={renderField} type="text" />
          <Field
            label="Title"
            name="title"
            component={renderField}
            type="text"
          />
          <Field
            label="Description"
            name="description"
            component={renderField}
            type="text"
          />
          <Field
            label="Image URL"
            name="image"
            component={renderField}
            type="text"
          />
          <Field label="ID" name="id" component={idField} type="text" />
          <button
            disabled={pristine || submitting}
            className={styles.button}
            type="submit"
          >
            Add
          </button>
          <button onClick={toggleModalHandler} className={styles.button}>
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

export default Modal;
