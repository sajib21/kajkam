import React from "react";
import { NavLink } from "react-router-dom";
import "./anime.css";

const Navbar = ({ user }) => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ position: "fixed", zIndex: "1", width: "100%" }}
    >
      <div class="d-flex w-50 order-0"></div>
      <div
        class="navbar-collapse collapse justify-content-center order-2"
        id="collapsingNavbar"
      >
        <a
          className="navbar-brand gh1"
          style={{
            boxShadow: "0px 0px 5px #fff",
            borderRadius: "10px",
            padding: "5px",
          }}
          href="/"
        >
          K A J K A M
        </a>
      </div>
      <span class="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"></span>
    </nav>
  );
};

export default Navbar;
