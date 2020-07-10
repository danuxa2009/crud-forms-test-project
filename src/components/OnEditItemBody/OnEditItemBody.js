import React from "react";
import styles from "../OnEditItemBody/OnEditItemBody.module.css";
import validate from "../Modal/validate";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { deleteItem } from "../../store/actions/actions";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
      {touched && error && <p>{error}</p>}
    </div>
  </div>
);

let OnEditItemBody = ({
  handleSubmit,
  initialize,
  name,
  title,
  description,
  image,
  id,
  deleteItem,
}) => {
  const onDeleteBtnHandler = (id) => {
    deleteItem(id);
  };
  initialize({ name, title, description, image });
  return (
    <div className={styles.body}>
      <form onSubmit={handleSubmit}>
        <Field label="Name" name="name" component={renderField} type="text" />
        <Field label="Title" name="title" component={renderField} type="text" />
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
        <button type="submit">SAVE</button>
        <button onClick={() => onDeleteBtnHandler(id)}>DELETE</button>
      </form>
    </div>
  );
};

OnEditItemBody = reduxForm({
  form: "editForm",
  enableReinitialize: true,
  validate,
})(OnEditItemBody);

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (payload) => dispatch(deleteItem(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OnEditItemBody);
