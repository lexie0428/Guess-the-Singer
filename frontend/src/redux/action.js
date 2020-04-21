import {
  SET_SONG, CHANGE_MODAL, SET_GENRE, SET_LOGIN
} from "./action-types";

export const setSong = (payload) => ({
  type: SET_SONG,
  song: payload
});

export const changeModal = (payload) => ({
  type: CHANGE_MODAL,
  modal: payload
});

export const setGenre = (payload) => ({
  type: SET_GENRE,
  modal: payload
});

export const setLogin = (payload) => ({
  type: SET_LOGIN,
  login: payload
});
