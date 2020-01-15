import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import loginIcon from "../assets/img/loginIcon.jpg";
import ModalLogin from "./modalLogin";

export default function TopHeader() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="navbar-topHeader">
        <button className="btn-topHeader" href="#home">
          Home
        </button>
        <button className="btn-topHeader" href="#news">
          News
        </button>
        <button className="btn-topHeader" href="#contact">
          Contact
        </button>{" "}
        <Avatar
          src={loginIcon}
          style={{
            float: "right",
            marginRight: "5px",
            margintop: "5px",
            height: "25px",
            width: "30px",
            marginTop: "3px",
            marginBottom: "3px"
          }}
          onClick={toggle}
        />
      </div>

      <div className="header-search">
        <input
          className="header-search-input"
          type="txt"
          placeholder="Faça uma busca por filmes e séries..."
        />
      </div>
      <ModalLogin modal={modal} toggle={toggle} />
    </>
  );
}
