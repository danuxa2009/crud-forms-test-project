import React from "react";
import styles from "../Modal/Modal.module.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
      {touched && error && <p>{error}</p>}
    </div>
  </div>
);

const validate = ({ name }, props) => {
  let names = [];
  const findAndPushUsedNames = () => {
    for (let item of props.usedNames) {
      const alreadyExistingName = item["name"];
      names.push(alreadyExistingName);
    }
  };
  const errors = {};
  findAndPushUsedNames();
  if (!name) {
    errors.name = `Required`;
  } else if (names.includes(name)) {
    errors.name = `'${name}' is already exist`;
  } else if (name.length > 20) {
    errors.name = "Must be 20 characters or less";
  } else if (name.trim() === "") {
    errors.name = "That's an error, enter something please";
  }
  return errors;
};

let Modal = ({ handleSubmit, toggleModalHandler }) => {
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
          <button className={styles.button} type="submit">
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

const mapStateToProps = (state) => ({
  usedNames: state.reducer.items,
});

export default connect(mapStateToProps)(Modal);
