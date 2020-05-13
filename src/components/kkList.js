import React from "react";
import KKCard from "./kkCard";
import KKActionButton from "./kkActionButton";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  height: 100%;
  padding: 8px;
  margin-right: 8px;
`;

const KKList = ({ title, cards, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {(provided) => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
          <h3>{title}</h3>
          {cards.map((card, index) => (
            <KKCard key={card.id} index={index} text={card.text} id={card.id} />
          ))}
          <KKActionButton listID={listID} />
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    height: "100%",
    padding: 8,
    marginRight: 8,
  },
};

export default KKList;
