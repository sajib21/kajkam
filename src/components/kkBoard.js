import React, { Component } from "react";
import KKList from "./kkList";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort, setCurrentBoard } from "../actions";
import styled from "styled-components";
import KKCreate from "./kkCreate";
import { Link } from "react-router-dom";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class KKBoard extends Component {
  componentDidMount() {
    const { boardID } = this.props.match.params;
    console.log("Board: CDM", boardID);
    this.props.dispatch(setCurrentBoard(boardID));
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) return;
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists, cards, match, boards } = this.props;
    const { boardID } = match.params;
    const board = boards[boardID];
    if (!board)
      return <h1 style={{ textAlign: "center" }}>Board not found!</h1>;

    const listOrder = board.lists;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Link to="/">Home</Link>
        <h1 style={{ textAlign: "center" }}>{board.boardTitle}</h1>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {(provided) => (
            <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              {listOrder.map((listID, index) => {
                const list = lists[listID];
                if (list) {
                  const listCards = list.cards.map((cardID) => cards[cardID]);
                  return (
                    <KKList
                      key={list.listID}
                      listID={list.listID}
                      title={list.listTitle}
                      cards={listCards}
                      index={index}
                    />
                  );
                }
              })}
              {provided.placeholder}
              <KKCreate list />
            </ListContainer>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards,
  lists: state.lists,
  cards: state.cards,
});

export default connect(mapStateToProps)(KKBoard);
