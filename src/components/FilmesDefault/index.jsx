import React from "react";
import Layout from "../../layout/layout";
import MenuDashboard from "../dashboard/menu";
import background from "../../assets/img/background.png";
import star from "../../assets/img/star.png";
import { dashboard } from "../../mocks/dashboard";
import um from "../../assets/img/um.jpg";
import "./filmesdefault.css";

export default function PageFilme() {
  return (
    <>
      <Layout>
        <img src={background} className="teste-img" />

        <div className="div-box-filme">
          <div className="post_left">
            <img
              src={um}
              style={{
                width: "100%",
                height: "237px",
                display: "block",
                marginBottom: "5px"
              }}
            />
            <button className="btn-play">Trailer</button>
          </div>
          <div className="post_center">
            <div>
              <img src={star} className="imdb-img" />
              sss
            </div>
            <div className="sinopse">
              Vic McQueen, uma talentosa jovem que descobre ter o dom
              sobrenatural de encontrar coisas perdidas. Esta habilidade a
              coloca em confronto com o malvado e imortal Charlie Manx. Manx é
              um vilão sobrenatural que se alimenta da alma de criancinhas e
              deposita o que resta delas em “Christmasland” – um lugar que só
              existe na sua louca imaginação, onde todo dia é Natal e a
              infelicidade está proibida por lei. Vic tenta derrotar Vic
              McQueen, uma talentosa jovem que descobre ter o dom sobrenatural
              de encontrar coisas perdidas. Esta habilidade a coloca em
              confronto com o malvado e imortal Charlie Manx. Manx é um vilão
              sobrenatural que se alimenta da alma de criancinhas e deposita o
              que resta delas em “Christmasland” – um lugar que só existe na sua
              louca imaginação, onde todo dia é Natal e a infelicidade está
              proibida por lei. Vic tenta derrotar
            </div>
            <button className="btn-play">Assistir</button>
          </div>
          <div className="post_right">tesddte</div>
        </div>
      </Layout>
    </>
  );
}
