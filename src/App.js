import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import ContainerForItems from "./components/ContainerForItems/ContainerForItems";
import Modal from "./components/Modal/Modal";
import { connect } from "react-redux";
import { addItemToStore } from "./store/actions/actions";

const App = ({ showModal, addItem, dataItems }) => {
  let addNewItem = (values) => {
    addItem(values);
  };

  return (
    <Fragment>
      <Header />
      {showModal && <Modal onSubmit={addNewItem} />}
      <ContainerForItems items={dataItems} />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  showModal: state.reducer.showModal,
  dataItems: state.reducer.items,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (payload) => dispatch(addItemToStore(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
