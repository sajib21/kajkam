import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./anime.css";

class Navbar extends Component {
  render() {
    const { currentBoard } = this.props;
    console.log("Navbar: render1:", currentBoard);
    var boardTitle = null;
    if (currentBoard) {
      const { boardID } = currentBoard;
      console.log("Navbar: render2:", boardID);
      if (boardID && boardID !== "")
        boardTitle = this.props.boards[boardID].boardTitle;
    }

    return (
      <div class="fixed-top navbar-dark bg-dark">
        <div class="row my-3">
          <div class="col-4 text-left">
            <a class="text-white" style={{ padding: "5px" }} href="#">
              Home
            </a>
          </div>
          <div class="col-4 text-center">
            <a
              class="text-white gh1"
              style={{
                backgroundColor: "black",
                boxShadow: "0px 0px 5px #fff",
                textDecoration: "none",
                borderRadius: "10px",
                padding: "2px",
              }}
              href="#"
            >
              K A J K A M
            </a>
          </div>
          <div class="col-4 text-right">
            <a class="text-white" style={{ padding: "5px" }}>
              About
            </a>
          </div>
        </div>
      </div>
      // <ul class="nav navbar-dark bg-dark">
      //   <li class="navbar-nav order-0">
      //     {boardTitle && <a class="nav-item nav-link active">{boardTitle}</a>}
      //   </li>

      //   <li class="navbar-nav justify-content-center mx-3">
      //     <a
      //       class="navbar-brand gh1"
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

      //   <li class="navbar-nav">
      //     <a class="nav-item nav-link">About</a>
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
      <ul class="nav justify-content-center">

        <li class="nav-item">
          <a class="nav-link active" href="#">
            Active
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>

      </ul>
    );
*/

/*
return (
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ position: "fixed", zIndex: "1", width: "100%" }}
      >
        <div class="navbar-nav d-flex w-50 order-0">
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

        <span class="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last">
          About
        </span>
      </nav>
    );
*/
