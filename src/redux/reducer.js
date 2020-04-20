import { SET_SONG, CHANGE_MODAL, SET_GENRE, SET_LOGIN } from "./action-types";

const defaultState = {
  song: '',
  modal: false,
  genre: '0',
  login: ''
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SONG:
      return {
        ...state,
        song: action.song
      };
      case CHANGE_MODAL:
      return {
        ...state,
        modal: action.modal
      };
      case SET_GENRE:
      return {
        ...state,
        genre: action.genre
      };
      case SET_LOGIN:
      return {
        ...state,
        login: action.login
      };
    default:
      return state;
  }
};
