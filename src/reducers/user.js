import { ADD_USER, ADD_TOKEN, DELETE_TOKEN } from '../actions';
import User from '../models/User';

export default (state = new User(null, null, null), action) => {
  switch(action.type) {
    case ADD_USER:
      return Object.assign({}, action.payload);
    case ADD_TOKEN:
      return Object.assign({}, state, { token: action.payload });
    case DELETE_TOKEN:
      return Object.assign({}, state, { token: null });
    default:
      return state;
  }
};