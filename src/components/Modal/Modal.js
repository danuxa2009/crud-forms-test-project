import React from "react";
import styles from "../Modal/Modal.module.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={styles.fields}>
    <label className={styles.labels}>{label}</label>
    <div>
      {touched && error ? (
        <div>
          <input className={styles.inputs_error} {...input} type={type} />
          <p className={styles.error}>{error}</p>
        </div>
      ) : (
        <input className={styles.inputs} {...input} type={type} />
      )}
    </div>
  </div>
);

const validate = ({ name, title, description, image }, props) => {
  let names = [];
  const findAndPushUsedNames = () => {
    for (let item of props.usedNames) {
      const alreadyExistingName = item["name"];
      names.push(alreadyExistingName);
    }
  };
  const errors = {};
  findAndPushUsedNames();
  if ((!name, !title, !description, !image)) {
    errors.name = "All fields are required";
    errors.title = " ";
    errors.description = " ";
    errors.image = " ";
  } else if (names.includes(name)) {
    errors.name = `'${name}' is already exist`;
  } else if (name.length > 20) {
    errors.name = "Enter 20 characters or less";
  } else if (description.length > 150) {
    errors.description = "Enter 150 characters or less";
  }
  return errors;
};

let Modal = ({ handleSubmit, toggleModalHandler }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.modalBody}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <div className={styles.buttons}>
            <button className={styles.button} type="submit">
              Add
            </button>
            <button onClick={toggleModalHandler} className={styles.button}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Modal = reduxForm({
  form: "item_form",
  validate,
})(Modal);

const mapStateToProps = (state) => ({
  usedNames: state.reducer.items,
});

export default connect(mapStateToProps)(Modal);
