import React from "react";
import Avatar from "@material-ui/core/Avatar";
import loginIcon from "../assets/img/loginIcon.jpg";
export default function TopHeader() {
  function logar() {}

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
        />{" "}
      </div>

      <div className="header-search">
        <input
          className="header-search-input"
          type="txt"
          name="s"
          maxlength="40"
          autocomplete="off"
          spellcheck="false"
          placeholder="Faça uma busca por filmes e séries..."
          required=""
        />
      </div>
    </>
  );
}
