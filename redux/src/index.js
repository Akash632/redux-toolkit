import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import accountReducer from './redux/reducers/amount';
import bonusReducer from './redux/reducers/bonus';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(combineReducers({
  account: accountReducer,
  bonus: bonusReducer
}), applyMiddleware(logger, thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
