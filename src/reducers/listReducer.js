import { CONSTANTS } from "./../actions/index";

let listID = 2;

const initialState = [
  {
    title: "Learn ReactJS",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Learn reactJS from Code With Mosh and make small projects.",
      },
      {
        id: 1,
        text: "Make a simple TODO list App",
      },
    ],
  },
  {
    title: "Make a Trello like app",
    id: 1,
    cards: [
      {
        id: 0,
        text: "Learn DND.",
      },
      {
        id: 1,
        text: "Learn material UI",
      },
      {
        id: 2,
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
        id: listID++,
      };
      return [...state, newList];
    default:
      return state;
  }
};

export default listReducer;
