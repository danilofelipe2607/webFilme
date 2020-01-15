import React from "react";
import { Formik } from "formik";

import { useDispatch } from "react-redux";
import { Modal, ModalBody, Label, Input, Col, Button } from "reactstrap";

import { realizarLoginAction } from "../actions/loginAction";

export default function ModalLogin({ modal, toggle }) {
  const initialValues = {
    email: "",
    password: ""
  };
  const dispatch = useDispatch();
  function logar(values) {
    dispatch(realizarLoginAction(values));
  }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div
            style={{
              textAlign: "center",
              alignItems: "center"
            }}
          >
            <header
              style={{
                fontFamily: "verdana",
                fontSize: "19px",
                color: "blue",
                marginBottom: "15px"
              }}
            >
              LOGIN
            </header>
            <Formik initialValues={initialValues} onSubmit={logar}>
              {props => (
                <form onSubmit={props.handleSubmit}>
                  <div className="row" style={{ marginBottom: "15px" }}>
                    <Label for="exampleEmail" sm={2}>
                      Email:
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="email"
                        name="email"
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        value={props.values.email}
                        placeholder="Digite seu email"
                      />
                    </Col>
                  </div>
                  <div className="row" style={{ marginBottom: "15px" }}>
                    <Label for="examplePassword" sm={2}>
                      Password:
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        value={props.values.password}
                        placeholder="password placeholder"
                      />
                    </Col>
                  </div>
                  <Button
                    color="primary"
                    className="px-4 "
                    style={{ marginBottom: "15px" }}
                    type="submit"
                  >
                    Login
                  </Button>
                  <div>
                    <a
                      href="https://www.google.com"
                      target="__blank"
                      color="link"
                    >
                      Esqueceu a senha?
                    </a>{" "}
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
