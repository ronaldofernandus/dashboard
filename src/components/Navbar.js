import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className=" absolute  w-1440  navbar navbar-expand-lg bg-primary">
      <div className="container">
        <h1 className="font-libre text-white">TO DO LIST</h1>
      </div>
    </nav>
  );
}

export default Navbar;
