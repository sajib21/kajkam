import React from "react";
import KKCard from "./kkCard";
import KKActionButton from "./kkActionButton";

const KKList = ({ title, cards, listID }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {cards.map((card) => (
        <KKCard key={card.id} text={card.text} />
      ))}
      <KKActionButton listID={listID} />
    </div>
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
