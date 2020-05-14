import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import KKForm from "./kkForm";

const CardContainer = styled.div`
  margin-bottom: 8px;
`;

const KKCard = ({ text, id, index }) => {
  const [editMode, setEditMode] = useState(false);
  const [cardText, setText] = useState(text);

  const closeForm = (e) => {
    setEditMode(false);
  };

  const saveCard = () => {};

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
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default KKCard;
