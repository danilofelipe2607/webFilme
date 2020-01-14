import React from "react";
import "./pageDefault.css";
import Pagination from "react-bootstrap/Pagination";

export default function Page() {
  const items = [
    <button className="btn-menu-Az">1</button>,
    <button className="btn-menu-Az">2</button>
  ];
  return <Pagination size="sm">{items}</Pagination>;
}
