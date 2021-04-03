import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import newCardReducer from './newCardReducer.jsx';
 

let reducers = combineReducers({
  cards: newCardReducer,
});

let store = createStore(
  reducers,
    applyMiddleware(
      thunk
    )
);

export default store;