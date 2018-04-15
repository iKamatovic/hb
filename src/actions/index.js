export const ADD_USER = 'ADD_USER';
export const ADD_TOKEN = 'ADD_TOKEN';
export const DELETE_TOKEN = 'DELETE_TOKEN';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
export const ADD_IMAGES = 'ADD_IMAGES';

export const addUser= (user) => ({ type: ADD_USER, payload: user });
export const addToken = (token) => ({ type: ADD_TOKEN, payload: token });
export const deleteToken = (token) => ({ type: DELETE_TOKEN, payload: token });
export const addNotification = (notification) => ({ type: ADD_NOTIFICATION, payload: notification });
export const deleteNotification = (notification) => ({ type: DELETE_NOTIFICATION, payload: notification });
export const addImages = (images) => ({ type: ADD_IMAGES, payload: images });