import React from "react";
import TopHeader from "../layout/topHeader";
import Footer from "../layout/footer";
import "../App.css";

export default function Layout({ children }) {
  return (
    <div className="container">
      <TopHeader />
      {children}
      <Footer />{" "}
    </div>
  );
}
