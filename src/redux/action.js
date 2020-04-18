import {
  SET_SONG, CHANGE_MODAL
} from "./action-types";

export const setSong = (payload) => ({
  type: SET_SONG,
  song: payload
});

export const changeModal = (payload) => ({
  type: CHANGE_MODAL,
  modal: payload
});
