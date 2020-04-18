import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'

function App() {

  return (
    <div className='container'>
      <Navbar />
      <div className='content'>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/signup" render={(props) => <Signup {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/reseach" component={Reseacher} />
          <Route exact path="/account" component={AccountPage} />
          <Route path="/user/:id" render={(props) => <Amazon {...props} id={props.match.params.id} />} />
          <Route path="/page/:id" render={(props) => <PageFriend {...props} id={props.match.params.id} />} /> */}
        </Switch>
      </div>
    </div>
  )
}

export default App;
