import React from "react";
import Routes from "./components/Routes";
import TopNavigation from "./components/topNavigation/topNavigation";
import SideNavigation from "./components/sideNavigation/sideNavigation";
import Footer from "./components/Footer/footer";
import "./components/index.css";

export default function LayoutAdmin() {
  return (
    <div className="flexible-content">
      <TopNavigation />
      <SideNavigation />
      <main id="content" className="p-5">
        <Routes />
      </main>
      <Footer />
    </div>
  );
}
