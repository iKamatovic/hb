import axios from 'axios';
import User from '../models/User';
import config from '../config/';

export const register = (email, password) => axios.post(`${config.backendUrl}/user/register`, {
    email,
    password,
    timeout: 2000
  })
  .then((response) => new User(response.data._id, response.data.email, response.headers['x-auth']))
  .catch(error => { throw error.response.data.message });

export const login = (email, password) => axios.post(`${config.backendUrl}/user/login`, {
    email,
    password,
    timeout: 2000
  })
  .then((response) => new User(response.data._id, response.data.email, response.headers['x-auth']))
  .catch(error => { throw error.response.data.message });

export const logout = (token) => axios.delete(`${config.backendUrl}/user/logout`, {
  headers: {'x-auth': token },
  timeout: 2000
})

export const getInfo = (token) => axios.get(`${config.backendUrl}/user/me`, {
  headers: {'x-auth': token },
  timeout: 2000
})
  .then((response) => new User(response.data._id, response.data.email, token))
  .catch(error => { throw error.response.data.message });