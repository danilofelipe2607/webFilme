import React, { Suspense, Children } from "react";
import TopHeader from "../layout/topHeader";
import Footer from "../layout/footer";
import MenuDashboard from "../components/dashboard/menu";
import "../App.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <TopHeader />
        <MenuDashboard />
        {children}
        <Footer />
      </div>
    </>
  );
}
