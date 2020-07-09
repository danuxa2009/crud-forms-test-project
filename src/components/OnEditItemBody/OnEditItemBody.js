import React from "react";
import styles from "../OnEditItemBody/OnEditItemBody.module.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <p>{error}</p>}
    </div>
  </div>
);

let OnEditItemBody = ({ handleSubmit }) => {
  return (
    <div className={styles.body}>
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
          <label htmlFor="image">Image URL</label>
          <Field name="image" component={renderField} type="text" />
        </div>
        <button type="submit">SAVE</button>
        <button>DELETE</button>
      </form>
    </div>
  );
};

OnEditItemBody = reduxForm({
  form: "editForm",
  enableReinitialize: true,
})(OnEditItemBody);

const mapStateToProps = (state) => ({
  initialValues: state.reducer.items[0],
});

export default connect(mapStateToProps)(OnEditItemBody);
