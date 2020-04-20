import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  async function logout() {
    const response = await fetch('/logout');
    const json = await response.json();
    if (json.res === true) {
      dispatch({ type: 'SET_LOGIN', login: '' });
    }
    localStorage.clear();
    props.history.push('/login');
  }

  useEffect(() => {
    const userLogin = localStorage.getItem('login');
    if (userLogin && !login.length) {
      dispatch({ type: 'SET_LOGIN', login: userLogin });
    }
  }, [login, dispatch]);

  if (!login) {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/account">{login}</Link>
            </li>
            <li>
              <Link to="/logout" onClick={logout}>
                Log out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
