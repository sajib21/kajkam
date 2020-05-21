import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import KKBoard from "./kkBoard";
import Home from "./home";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/:boardID" component={KKBoard} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
