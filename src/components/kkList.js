import React from "react";
import KKCar from "./kkCard";

const KKList = ({ title }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      <KKCar />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 300,
    padding: 8,
  },
};

export default KKList;
