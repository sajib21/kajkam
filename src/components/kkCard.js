import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, Icon } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import KKForm from "./kkForm";
import { editCard } from "../actions";
import { connect } from "react-redux";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const KKCard = ({ text, id, listID, index, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const [cardText, setText] = useState(text);

  const closeForm = (e) => {
    setEditMode(false);
  };

  const saveCard = (e) => {
    console.log("SAVE");
    e.preventDefault();
    dispatch(editCard(id, listID, cardText));
    setEditMode(false);
  };

  if (editMode)
    return (
      <KKForm
        text={cardText}
        setText={setText}
        closeForm={closeForm}
        onAction={saveCard}
      />
    );

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            <EditButton fontSize="small" onMouseDown={() => setEditMode(true)}>
              edit
            </EditButton>
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default connect()(KKCard);
