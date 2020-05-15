import React, { useState } from "react";
import KKCard from "./kkCard";
import KKCreate from "./kkCreate";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect } from "react-redux";
import { editListTitle } from "../actions";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  height: 100%;
  padding: 8px;
  margin-right: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;

const KKList = React.memo(({ title, cards, listID, index, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleCloseEdit = (e) => {
    setEditMode(false);
    dispatch(editListTitle(listID, listTitle));
  };

  const renderEditInput = () => {
    return (
      <input
        type="text"
        value={listTitle}
        onChange={handleChange}
        autoFocus
        onFocus={handleFocus}
        onBlur={handleCloseEdit}
      />
    );
  };

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <ListContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {editMode ? (
                  renderEditInput()
                ) : (
                  <h4 onClick={() => setEditMode(true)}>{title}</h4>
                )}
                {cards.map((card, index) => (
                  <KKCard
                    key={card.id}
                    index={index}
                    text={card.text}
                    id={card.id}
                    listID={listID}
                  />
                ))}
                {provided.placeholder}
                <KKCreate listID={listID} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
});

export default connect()(KKList);
