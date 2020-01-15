import hash from "react-router-history";
import Swal from "sweetalert2";
import api from "../services/api";
import * as a from "../actionsType/index";

const hashHistory = hash.hashHistory;

export const realizarLoginAction = values => async dispatch => {
  try {
    console.log("values", values);
    // const { data } = await api.post("/sdds");
    let token = ["23232323"];
    dispatch({ type: a.LOGIN_SET_SUCESS, payload: token });
    console.log("sdd");
    localStorage.setItem("Authorization", token);
    hashHistory.push("/admin");
    Swal.fire({
      icon: "success",
      title: "Logado com sucesso!",
      showConfirmButton: false,
      timer: 750
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text:
        "Ocorreu um erro ao tentar acessar o sistema! Tente novamente mais tarde."
    });
  }
};
