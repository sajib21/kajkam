import { CONSTANTS } from "./index";
import uuid from "react-uuid";

export const addList = (title) => {
  return (dispatch, getState) => {
    dispatch({
      type: CONSTANTS.ADD_LIST,
      payload: { title, boardID: getState().activeBoard, id: uuid() },
    });
  };
};

export const editListTitle = (listID, newTitle) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle,
    },
  };
};

export const deleteList = (listID) => {
  return (dispatch, getState) => {
    return dispatch({
      type: CONSTANTS.DELETE_LIST,
      payload: {
        listID,
        boardID: getState().activeBoard,
      },
    });
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return (dispatch, getState) => {
    dispatch({
      type: CONSTANTS.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
        boardID,
      },
    });
  };
};
