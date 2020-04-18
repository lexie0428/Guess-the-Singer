import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Find.css';
import { fetchToSong } from '../../utils/fetchToSong';
import Modal from '../Modal/Modal';

export default function Find() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const currentSong = useSelector((state) => state.song);

  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState('');
  const [song, setSong] = useState('');

  function check() {
    if (answer.length > 1 && currentSong.artist.name.toLowerCase().includes(answer.toLowerCase())) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setSong('');
    dispatch({ type: 'CHANGE_MODAL', modal: true });
  }

  async function search() {
    setSong('');
    const data = await fetchToSong();
    dispatch({ type: 'SET_SONG', song: data });
    setSong(data);
  }

  function isModal() {
    if (modal) {
      return <Modal isCorrect={isCorrect} />;
    } else {
      return <></>;
    }
  }

  useEffect(() => {
    setSong(currentSong);
  }, [currentSong]);

  if (!song) {
    return (
      <>
        {isModal()}
        <div className="findContainer">
          <button onClick={search}>Play</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        {isModal()}
        <video controls="controls" autoplay="" name="media">
          <source src={song.preview} type="audio/mpeg" />
        </video>
        <div className="findContainer">
          <input
            type="text"
            placeholder="write your answer"
            onChange={(event) => setAnswer(event.target.value)}
          />
          <button onClick={check}>Check</button>
        </div>
      </>
    );
  }
}
