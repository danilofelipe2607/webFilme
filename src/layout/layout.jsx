import React from "react";
import Avatar from "@material-ui/core/Avatar";
import loginIcon from "../assets/img/loginIcon.jpg";
import TopHeader from "../layout/topHeader";
import Footer from "../layout/footer";

export default function Layout({ children }) {
  return (
    <>
      <TopHeader />
      {children}
      <Footer />
    </>
  );
}
