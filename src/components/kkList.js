import React from "react";
import KKCard from "./kkCard";
import KKActionButton from "./kkActionButton";
import { Droppable } from "react-beautiful-dnd";

const KKList = ({ title, cards, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h3>{title}</h3>
          {cards.map((card, index) => (
            <KKCard key={card.id} index={index} text={card.text} id={card.id} />
          ))}
          <KKActionButton listID={listID} />
          {provided.placeholder}
        </div>
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
