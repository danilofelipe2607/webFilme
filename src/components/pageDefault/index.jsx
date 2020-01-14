import React from "react";
import Layout from "../../layout/layout";
import MenuDashboard from "../../components/dashboard/menu";
import { dashboard } from "../../mocks/dashboard";
import MenuAz from "./menuAz";
import Page from "./pagination";

export default function PageDefault() {
  return (
    <>
      <Layout>
        <MenuDashboard />
        <div className="fundo">
          <MenuAz />
          <header style={{ color: "white" }}>Ultimos Lançamentos </header>
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
          <Page />
        </div>
      </Layout>
    </>
  );
}
