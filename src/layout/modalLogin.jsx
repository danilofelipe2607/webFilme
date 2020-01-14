import React from "react";
import { Formik } from "formik";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ReactModalLogin from "react-modal-login";

export default function ModalLogin({
  modal,
  toggle,
  loading,
  finishLoading,
  startLoading
}) {
  return (
    <div>
      <ReactModalLogin
        visible={modal}
        onCloseModal={toggle}
        loading={loading}
        // error={this.state.error}
        // tabs={{
        //   afterChange: this.afterTabsChange.bind(this)
        // }}
        loginError={{
          label: "Couldn't sign in, please try again."
        }}
        registerError={{
          label: "Couldn't sign up, please try again."
        }}
        startLoading={startLoading}
        finishLoading={finishLoading}
      />
    </div>
  );
}
