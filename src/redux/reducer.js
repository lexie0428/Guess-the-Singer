import { SET_SONG, CHANGE_MODAL } from "./action-types";

const defaultState = {
  song: '',
  modal: false
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
    default:
      return state;
  }
};
