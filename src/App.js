import React from "react";
import PageFilme from "./components/FilmesDefault/index";
import "./App.css";
function App() {
  return (
    <div className="container">
      {/* <img src={logo} alt="AirCnC" /> */}
      <PageFilme/>
    </div>
  );
}

export default App;

// <div className="container">
//   {/* <img src={logo} alt="AirCnC" /> */}
//   <div className="content">
//     <Dashboard />;
//   </div>
// </div>;
