import React, { useState } from "react";
import "../../css/dashboard.css";
import { dashboard } from "../../mocks/dashboard";
import { Button } from "reactstrap";
import Layout from "../../layout/layout";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <div>
          <Button className="btn-dashboard ">Ultimos Adicionados</Button>
          <Button className="btn-dashboard ">Filmes</Button>
          <Button className="btn-dashboard ">Séries</Button>
          <Button className="btn-dashboard ">Outros</Button>
          <Button className="btn-dashboard ">primary</Button>
        </div>
        <div className="fundo">
          <input
            type="search"
            placeholder="Faça a busca pelo seu filme aqui!"
          />
          <header style={{ color: "white" }}>Ultimos filmes adicionados</header>
          <ul id="menu">
            {dashboard.map(item => (
              <li
                id="dashboard-li"
                key={item._id}
                style={{ background: `url(${item.url})` }}
              >
                <span className="mn-c-red">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>{" "}
      </Layout>
    </>
  );
}
