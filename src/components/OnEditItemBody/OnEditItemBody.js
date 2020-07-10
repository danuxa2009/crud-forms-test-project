import React from "react";
import styles from "../OnEditItemBody/OnEditItemBody.module.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { deleteItem } from "../../store/actions/actions";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className={styles.inputs} {...input} type={type} />
      {touched && error && <p>{error}</p>}
    </div>
  </div>
);

const idField = ({ input, type }) => (
  <div>
    <input className={styles.idField} {...input} type={type} />
  </div>
);

let OnEditItemBody = ({ handleSubmit, id, deleteItem, image }) => {
  const onDeleteBtnHandler = (id) => {
    deleteItem(id);
  };

  return (
    <div className={styles.body}>
      <form onSubmit={handleSubmit}>
        <img alt="Item" width="250" height="250" src={image} />
        <div className={styles.formBody}>
          <Field
            label="Image URL"
            name="image"
            component={renderField}
            type="text"
          />
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
          <Field name="id" component={idField} />
          <button type="submit">SAVE</button>
          <button onClick={() => onDeleteBtnHandler(id)}>DELETE</button>
        </div>
      </form>
    </div>
  );
};

OnEditItemBody = reduxForm({
  form: "editForm",
  enableReinitialize: true,
})(OnEditItemBody);

OnEditItemBody = connect((state, props) => ({
  initialValues: {
    name: props.name,
    id: props.id,
    title: props.title,
    image: props.image,
    description: props.description,
  },
}))(OnEditItemBody);

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (payload) => dispatch(deleteItem(payload)),
});
export default connect(null, mapDispatchToProps)(OnEditItemBody);
