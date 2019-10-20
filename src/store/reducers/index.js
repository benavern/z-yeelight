import { combineReducers } from "redux";
import lights from './lights';
import db from './db';

export default combineReducers({
  lights,
  db
});
