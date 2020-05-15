import { CONSTANTS } from "./../actions/index";

let listID = 2,
  cardID = 6;

const initialState = [
  {
    title: "Learn ReactJS",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Learn reactJS from Code With Mosh and make small projects.",
      },
      {
        id: `card-${1}`,
        text: "Make a simple TODO list App",
      },
    ],
  },
  {
    title: "Make a Trello like app",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "Learn DND.",
      },
      {
        id: `card-${3}`,
        text: "Learn material UI",
      },
      {
        id: `card-${4}`,
        text: "Make project with help from youtube",
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID++}`,
      };
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        id: `card-${cardID++}`,
        text: action.payload.text,
      };

      const newState = state.map((list) => {
        if (list.id === action.payload.listID)
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        else return list;
      });
      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;
      const newState = [...state];

      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      } else {
        const startList = state.find((list) => droppableIdStart === list.id);
        const card = startList.cards.splice(droppableIndexStart, 1);
        const endList = state.find((list) => droppableIdEnd === list.id);
        endList.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;

    case CONSTANTS.EDIT_CARD: {
      const { id, listID, newText } = action.payload;
      return state.map((list) => {
        if (list.id === listID) {
          const newCards = list.cards.map((card) => {
            if (card.id === id) {
              card.text = newText;
              return card;
            } else return card;
          });
          return { ...list, cards: newCards };
        } else return list;
      });
    }

    case CONSTANTS.DELETE_CARD: {
      const { id, listID } = action.payload;
      return state.map((list) => {
        if (list.id === listID) {
          const newCards = list.cards.filter((card) => card.id !== id);
          return { ...list, cards: newCards };
        } else return list;
      });
    }

    case CONSTANTS.EDIT_LIST_TITLE: {
      const { listID, newTitle } = action.payload;
      return state.map((list) => {
        if (list.id === listID) {
          list.title = newTitle;
          return list;
        } else return list;
      });
    }

    case CONSTANTS.DELETE_LIST: {
      const { listID } = action.payload;
      return state.filter((list) => list.id !== listID);
    }

    default:
      return state;
  }
};

export default listReducer;
