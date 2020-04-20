import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Login(props) {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [err, setError] = useState('');

  async function sigin() {
    if (login.length && password.length) {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset = utf-8' },
        body: JSON.stringify({
          login: login,
          password: password,
        }),
      });
      const resp = await response.json();
      if (resp.user) {
        localStorage.setItem('login', resp.user.login);
        dispatch({ type: 'SET_LOGIN', login: resp.user.login });
        props.history.push('/');
      } else if (resp.err) {
        setError(resp.err);
      }
    } else {
      setError('Fill in all fields')
    }
  }

  function isError() {
    if (err) {
      return <div>{err}</div>;
    } else {
      return <></>;
    }
  }

  return (
    <div className="form sign-in">
      <h2>Welcome back</h2>
      <label>
        <span>Name</span>
        <input type="text" onChange={(event) => setLogin(event.target.value)} />
      </label>
      <label>
        <span>Password</span>
        <input type="password" onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="button" className="submit" onClick={sigin}>
        Log In
      </button>
      <div className='err'>{isError()}</div>
    </div>
  );
}
