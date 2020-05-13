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
      } = action.payload;
      const newState = [...state];
      // in the same list
      if (droppableIdStart == droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;

    default:
      return state;
  }
};

export default listReducer;
