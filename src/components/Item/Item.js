import React, { useState } from "react";
import styles from "../ItemBody/ItemBody.module.css";
import ItemBody from "../ItemBody/ItemBody";
import OnEditItemBody from "../OnEditItemBody/OnEditItemBody";
import { connect } from "react-redux";
import { editItem } from "../../store/actions/actions";

const Item = ({ ...props }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onEditToggleHandler = () => {
    setIsEditing(!isEditing);
  };
  const submitEditData = (values) => {
    editItem(values);
    onEditToggleHandler();
  };

  return (
    <div className={styles.item}>
      {isEditing ? (
        <OnEditItemBody onSubmit={submitEditData} />
      ) : (
        <ItemBody onEditToggleHandler={onEditToggleHandler} {...props} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataItems: state.reducer.items,
});

const mapDispatchToProps = (dispatch) => ({
  editItem: (payload) => dispatch(editItem(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
