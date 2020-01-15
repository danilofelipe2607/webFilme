import hash from "react-router-history";
import Swal from "sweetalert2";
import api from "../services/api";
import * as a from "../actionsType/index";

const hashHistory = hash.hashHistory;

export const realizarLoginAction = values => async dispatch => {
  try {
    const { email, password } = values;
    console.log(email, password);
    const { data } = await api.post(`/auth/${email}/${password}`);
    console.log(data);
    if (data.token) {
      dispatch({ type: a.LOGIN_SET_SUCESS, payload: data.token });
      localStorage.setItem("Authorization", data.token);
      hashHistory.push("/admin");
      Swal.fire({
        icon: "success",
        title: "Logado com sucesso!",
        showConfirmButton: false,
        timer: 750
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuário não encontrado!."
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text:
        "Ocorreu um erro ao tentar acessar o sistema! Tente novamente mais tarde."
    });
  }
};
