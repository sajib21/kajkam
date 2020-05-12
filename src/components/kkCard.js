import React from "react";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

const KKCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card style={styles.cardContainer}>
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

export default KKCard;
