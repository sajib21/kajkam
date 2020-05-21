import { CONSTANTS } from "./index";

export const addBoard = (boardTitle) => {
  return {
    type: CONSTANTS.ADD_BOARD,
    payload: {
      boardTitle,
    },
  };
};

export const setCurrentBoard = (boardID) => {
  return {
    type: CONSTANTS.SET_CURRENT_BOARD,
    payload: {
      boardID,
    },
  };
};
