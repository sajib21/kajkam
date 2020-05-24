import { CONSTANTS } from "../actions";

const initialState = {
  "board-00": {
    id: "board-00",
    lists: ["list-00"],
    boardTitle: "dev board",
  },
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD: {
      const { boardTitle, boardID } = action.payload;
      const newBoard = {
        boardID,
        boardTitle,
        lists: [],
      };
      return { ...state, [boardID]: newBoard };
    }

    //TODO: case CONSTANTS.DELETE_BOARD:
    case CONSTANTS.DELETE_BOARD: {
      const { boardID } = action.payload;
      // console.log("Board Reducer: DELETE_BOARD:", boardID);
      const boards = { ...state };
      delete boards[boardID];
      return boards;
    }

    // rename board

    case CONSTANTS.ADD_LIST: {
      const { boardID, listID } = action.payload;
      const board = state[boardID];
      board.lists.push(listID);
      return { ...state, [boardID]: board };
    }

    case CONSTANTS.DELETE_LIST: {
      const { boardID, listID } = action.payload;
      // console.log("Board Reducer: delete list: ", listID, boardID);
      const board = state[boardID];
      const newLists = board.lists.filter((id) => id != listID);
      board.lists = newLists;
      return { ...state, [boardID]: board };
    }

    case CONSTANTS.DRAG_HAPPENED: {
      const {
        boardID,
        type,
        droppableIndexStart,
        droppableIndexEnd,
      } = action.payload;
      if (type !== "list") return state;
      const board = state[boardID];
      const lists = board.lists;
      const draggedList = lists.splice(droppableIndexStart, 1);
      lists.splice(droppableIndexEnd, 0, ...draggedList);
      board.lists = lists;
      return { ...state, [boardID]: board };
    }

    default:
      return state;
  }
};

export default boardReducer;
