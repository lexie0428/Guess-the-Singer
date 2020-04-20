import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Account.css';

export default function Account() {
  const login = useSelector((state) => state.login);

  const [user, setUser] = useState('');

  async function getInfo() {
    const response = await fetch('/info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset = utf-8' },
      body: JSON.stringify({
        login: login,
      }),
    });
    const resp = await response.json();
    console.log(resp);

    setUser(resp.user);
  }

  useEffect(() => {
    if (!user) {
      getInfo();
    }
    if (user) {
      const answers = (user.correct / (user.correct + user.incorrect)) * 100;
      console.log(answers, 'answeeers');
      document.querySelector('.progress-bar').style.width = `${answers}%`;
      document.querySelector('.wrong-progress-bar').style.width = `${100 - answers}%`;
      if (isNaN(answers) || answers === 0) {
        document.querySelector('.progress-bar').style.display = 'none';
        document.querySelector('.wrong-progress-bar').style.width = '100%';
      } else if (100 - answers === 0) {
        document.querySelector('.wrong-progress-bar').style.display = 'none';
      }
    }
  });

  if (user) {
    return (
      <div className="account">
        <div className="user-info">
          <h2>{login}</h2>
          <div>
            <div>Answers: {user.correct + user.incorrect}</div>
            <div>Correct answers: {user.correct}</div>
            <div>Inorrect answers: {user.incorrect}</div>
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar tx">{user.correct}</div>
          <div className="wrong-progress-bar tx">{user.incorrect}</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
