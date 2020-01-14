import React from "react";
import "../../css/dashboard.css";
import { dashboard } from "../../mocks/dashboard";
import Layout from "../../layout/layout";
import MenuDashboard from "../../components/dashboard/menu";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <MenuDashboard />
        <div className="fundo">
          <header style={{ color: "white" }}>Ultimos Lançamentos </header>
          <ul id="menu">
            {dashboard.map((item, index) => (
              <li
                id="dashboard-li"
                key={index}
                style={{ background: `url(${item.url})` }}
              >
                <span className="mn-c-red">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
