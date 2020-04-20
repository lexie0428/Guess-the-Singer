import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Signup(props) {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setError] = useState('');

  async function signup() {
    if (login.length && email.length && password.length) {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset = utf-8' },
        body: JSON.stringify({
          login: login,
          email: email,
          password: password,
        }),
      });
      const resp = await response.json();
      if (resp.user) {
        localStorage.setItem('login', resp.user.login);
        dispatch({ type: 'SET_LOGIN', login: resp.user.login });
        props.history.push('/');
      } else {
        setError('The user already exists');
      }
    } else {
      setError('Fill in all fields');
    }
  };

  function isError() {
    if (err) {
      return <div>{err}</div>;
    } else {
      return <></>;
    }
  }

  return (
    <div className="form sign-up">
      <h2>Time to feel like home</h2>
      <label>
        <span>Name</span>
        <input type="text" onChange={(event) => setLogin(event.target.value)} />
      </label>
      <label>
        <span>Email</span>
        <input type="email" onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        <span>Password</span>
        <input type="password" onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="button" className="submit" onClick={signup}>
        Sign Up
      </button>
      <div className="err">{isError()}</div>
    </div>
  );
}
