import React, { Component } from "react";
import KKList from "./kkList";
import { connect } from "react-redux";
import KKActionButton from "./kkActionButton";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Hello World</h2>
        <div style={styles.listsContainer}>
          {lists.map((list) => (
            <KKList key={list.id} title={list.title} cards={list.cards} />
          ))}
          <KKActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
