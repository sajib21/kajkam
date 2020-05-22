import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark"
      style={{ position: "fixed", zIndex: "1", width: "100%" }}
    >
      <a className="navbar-brand" href="/">
        Kajkam
      </a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="/inbox">
            Inbox
          </a>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
