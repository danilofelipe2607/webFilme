import React from "react";
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
