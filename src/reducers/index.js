import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import activeBoardReducer from "./activeBoardReducer";
import listReducer from "./listReducer";
import cardReducer from "./cardReducer";

export default combineReducers({
  boards: boardReducer,
  activeBoard: activeBoardReducer,
  lists: listReducer,
  cards: cardReducer,
});
