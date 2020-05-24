import React, { Component } from "react";
import { connect } from "react-redux";
import "./anime.css";

class Navbar extends Component {
  render() {
    return (
      <div className="fixed-top navbar-dark bg-dark">
        <div className="row my-3">
          <div className="col-4 text-left">
            <a className="text-white" style={{ padding: "5px" }} href="#">
              Home
            </a>
          </div>
          <div className="col-4 text-center">
            <a
              className="text-white gh1"
              style={{
                backgroundColor: "black",
                boxShadow: "0px 0px 5px #fff",
                textDecoration: "none",
                borderRadius: "8px",
                padding: "2px",
              }}
              href="#"
            >
              K A J K A M
            </a>
          </div>
          <div className="col-4 text-right">
            <a className="text-white" style={{ padding: "5px" }} href="#/about">
              About
            </a>
          </div>
        </div>
      </div>
      // <ul className="nav navbar-dark bg-dark">
      //   <li className="navbar-nav order-0">
      //     {boardTitle && <a className="nav-item nav-link active">{boardTitle}</a>}
      //   </li>

      //   <li className="navbar-nav justify-content-center mx-3">
      //     <a
      //       className="navbar-brand gh1"
      //       style={{
      //         boxShadow: "0px 0px 5px #fff",
      //         borderRadius: "10px",
      //         padding: "5px",
      //       }}
      //       href="/"
      //     >
      //       K A J K A M
      //     </a>
      //   </li>

      //   <li className="navbar-nav">
      //     <a className="nav-item nav-link">About</a>
      //   </li>
      // </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards,
  currentBoard: state.currentBoard,
});

export default connect(mapStateToProps)(Navbar);

/*
return (
      <ul className="nav justify-content-center">

        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>

      </ul>
    );
*/

/*
return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ position: "fixed", zIndex: "1", width: "100%" }}
      >
        <div className="navbar-nav d-flex w-50 order-0">
          {boardTitle && (
            <a className="nav-item nav-link active">{boardTitle}</a>
          )}
        </div>

        <div className="nav justify-content-center">
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

        <span className="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last">
          About
        </span>
      </nav>
    );
*/