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
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ position: "fixed", zIndex: "1", width: "100%" }}
      >
        <div class="navbar-nav d-flex w-50 order-0">
          {boardTitle && (
            <a className="nav-item nav-link active">
              {boardTitle}
              <span className="sr-only">(current)</span>
            </a>
          )}
        </div>
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
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards,
  currentBoard: state.currentBoard,
});

export default connect(mapStateToProps)(Navbar);
