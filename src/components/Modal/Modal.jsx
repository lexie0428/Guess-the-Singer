import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Modal.css';
import { fetchToSong } from '../../utils/fetchToSong';

export default function Modal(props) {
  const song = useSelector((state) => state.song);
  const dispatch = useDispatch();

  function check() {
    if (props.isCorrect) {
      return <div>Correct answer!</div>;
    } else {
      return <div>Incorrect answer!</div>;
    }
  }

  async function closeModal() {
    const data = await fetchToSong();
    dispatch({ type: 'SET_SONG', song: data });
    dispatch({ type: 'CHANGE_MODAL', modal: false });
  }

  if (song) {
    return (
      <>
        <div className="modal">
          {check()}
          <img src={song.artist.picture_medium} alt="img" />
          <h3>{song.artist.name}</h3>
          <div>{song.title}</div>
          <button onClick={closeModal}>Next</button>
        </div>
      </>
    );
  }
}
