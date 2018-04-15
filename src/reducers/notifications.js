import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.payload];
    case DELETE_NOTIFICATION:
      return state.filter(n => n !== action.payload);
    default:
      return state;
  }
};