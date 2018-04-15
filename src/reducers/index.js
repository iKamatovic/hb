import { combineReducers } from 'redux';
import user from './user';
import notifications from './notifications';
import images from './images';

export default combineReducers({
  user,
  notifications,
  images
});