import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import ContainerForItems from "./components/ContainerForItems/ContainerForItems";
import Modal from "./components/Modal/Modal";
import { connect } from "react-redux";
import { addItemToStore } from "./store/actions/actions";

const App = ({ addItem, dataItems }) => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  const toggleModalHandler = () => {
    setIsModalShowing(!isModalShowing);
  };

  const addNewItem = (values) => {
    addItem(values);
    toggleModalHandler();
  };

  return (
    <Fragment>
      <Header toggleModalHandler={toggleModalHandler} />
      {isModalShowing ? (
        <Modal toggleModalHandler={toggleModalHandler} onSubmit={addNewItem} />
      ) : null}
      <ContainerForItems items={dataItems} />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  dataItems: state.reducer.items,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (payload) => dispatch(addItemToStore(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
