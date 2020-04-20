import React, {useEffect} from 'react';
import './Auth.css';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

export default function Auth(props) {
  function change() {
    document.querySelector('.cont').classList.toggle('s--signup');
  }

  useEffect(() => {
    if (!props.purse) {
      document.querySelector('.cont').classList.toggle('s--signup');
    }
  }, [props.purse]);
  

  return (
    <div className="authform">
      <div className="cont">
      <Login {...props}/>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and and see your progress!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>If you already has an account, just log in. We've missed you!</p>
            </div>
            <div className="img__btn">
              <span className="m--up" onClick={change}>
                Sign Up
              </span>
              <span className="m--in" onClick={change}>
                Log In
              </span>
            </div>
          </div>
          <Signup {...props}/>
        </div>
      </div>
    </div>
  );
}
