import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import KKBoard from "./kkBoard";
import Home from "./home";
import Navbar from "./navbar";

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
        }}
      >
        <Navbar />
        <div style={{ marginTop: "60px" }}>
          <Switch>
            <Route path="/:boardID" component={KKBoard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
