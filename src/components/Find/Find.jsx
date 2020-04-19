import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Find.css';
import { fetchToSong } from '../../utils/fetchToSong';
import { fetchToGenre } from '../../utils/fetchToGenre';
import Modal from '../Modal/Modal';

export default function Find() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const currentSong = useSelector((state) => state.song);

  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState('');
  const [song, setSong] = useState('');
  const [genres] = useState([
    { name: 'Pop', id: '132' },
    { name: 'Mix', id: '0' },
    { name: 'Rap', id: '116' },
    { name: 'Rock', id: '152' },
    { name: 'Reggae', id: '144' },
    { name: 'Metal', id: '464' },
  ]);

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

  async function genre(event) {
    dispatch({ type: 'SET_GENRE', genre: event.target.id });
    setSong('');
    const data = await fetchToGenre(event.target.id);
    dispatch({ type: 'SET_SONG', song: data });
    setSong(data);
  }

  useEffect(() => {
    setSong(currentSong);
  }, [currentSong]);

  if (modal) {
    return <Modal isCorrect={isCorrect} />;
  } else if (!song) {
    return (
      <>
        <div className="findContainer">
          <div className="buttons">
            {genres.map((item) => {
              if (item.id !== '0') {
                return (
                  <div className="genresContainer">
                    <button id={item.id} onClick={genre}>
                      {item.name}
                    </button>
                  </div>
                );
              } else {
                return (
                  <div className="genresContainer">
                    <button onClick={search}>{item.name}</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <video controls="controls" autoplay="" name="media">
          <source src={song.preview} type="audio/mpeg" />
        </video>
        <div className="findContainer">
          <div className="checkAnswer">
            <input
              type="text"
              placeholder="write your answer"
              onChange={(event) => setAnswer(event.target.value)}
            />
            <button onClick={check}>Check</button>
          </div>
        </div>
      </>
    );
  }
}
