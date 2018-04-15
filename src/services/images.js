import axios from 'axios';
import Image from '../models/Image';
import config from '../config/';

export const fetch = (page = 0) => axios.get(`${config.backendUrl}/beaches`, {
    params: { page }
  })
  .then(response => response.data.map(image => new Image(
    image._id,
    image.name,
    config.backendUrl,
    image.url,
    image.width,
    image.height
  )))
  .catch(error => { throw error.response.data.message });