import React from "react";
import "../../css/style.css";
import teste from "../../assets/imgs/teste.png";

export default function Dashboard() {
  return (
    <>
      <div className="row-dashboard">
        {" "}
        <div className="row-dashboard-principal">
          <img src={teste} />
        </div>{" "}
        <div>
          {" "}
          <img src={teste} />
        </div>
      </div>

      <div className="row-dashboard-outros">
        {" "}
        <img src={teste} width="200" />{" "}
      </div>
    </>
  );
}
