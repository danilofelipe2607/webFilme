import React from "react";
import "../../css/dashboard.css";
import { Button } from "reactstrap";

export default function MenuDashboard() {
  return (
    <>
      <div className="menu-dashboard">
        <Button className="btn-dashboard ">Ultimos Adicionados</Button>
        <Button className="btn-dashboard ">Filmes</Button>
        <Button className="btn-dashboard ">Séries</Button>
        <Button className="btn-dashboard ">Outros</Button>
        <Button className="btn-dashboard ">primary</Button>
      </div>
    </>
  );
}
