import React, { useState, Fragment } from "react";
import Header from "./components/Header/Header";
import ContainerForItems from "./components/ContainerForItems/ContainerForItems";
import Modal from "./components/Modal/Modal";
import { connect } from "react-redux";

const App = ({ showModal }) => {
  return (
    <Fragment>
      <Header />
      {showModal && <Modal />}
      <ContainerForItems />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  showModal: state.reducer.showModal,
});

export default connect(mapStateToProps)(App);
