import React from "react";
import KKCard from "./kkCard";

const KKList = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {cards.map((card) => (
        <KKCard text={card.text} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
  },
};

export default KKList;
