import React from 'react';
// import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./redux/reducer";
//импортируем все необходимое для thunk 
import thunk from "redux-thunk";
// import {persistor} from './redux/configureStore'
// подключаем thunk и devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// засовываем thunk в store
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
        <Router>
      <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
