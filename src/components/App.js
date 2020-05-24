import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import KKBoard from "./kkBoard";
import Home from "./home";
import Navbar from "./navbar";
import About from "./about";

class App extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100%",
          overflowY: "auto",
          overflowX: "auto",
          background: "linear-gradient(45deg, #dfd819, #0da5f1)",
          padding: "15px",
        }}
      >
        <Navbar />
        <div style={{ marginTop: "60px" }}>
          <Switch>
            <Route path="/boards/:boardID" component={KKBoard} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
