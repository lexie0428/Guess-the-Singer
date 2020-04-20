import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Auth from './components/Auth/Auth';
import Account from './components/Account/Account'

function App() {

  return (
    <div className='container'>
      <Route render={(props) => <Navbar {...props}/>}/>
      <div className='content'>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" render={(props) => <Auth {...props}/>} />
          <Route exact path="/login" render={(props) => <Auth purse='login' {...props}/>} />
          <Route exact path="/account" render={(props) => <Account {...props}/>} />
        </Switch>
      </div>
    </div>
  )
}

export default App;
