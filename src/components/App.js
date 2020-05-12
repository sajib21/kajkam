import React, { Component } from "react";
import KKList from "./kkList";
import { connect } from "react-redux";
import KKActionButton from "./kkActionButton";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  onDragEnd = () => {};

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h2>Hello World</h2>
        <div className="App">
          <div style={styles.listsContainer}>
            {lists.map((list) => (
              <KKList
                key={list.id}
                listID={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <KKActionButton list />
          </div>
        </div>
      </DragDropContext>
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
