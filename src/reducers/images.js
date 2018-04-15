import { ADD_IMAGES } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_IMAGES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};