import React, { Component } from "react";
import KKList from "./kkList";
import { connect } from "react-redux";
import KKActionButton from "./kkActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h2>Hello World</h2>
        <ListContainer>
          {lists.map((list) => (
            <KKList
              key={list.id}
              listID={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <KKActionButton list />
        </ListContainer>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
