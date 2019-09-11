import axios from 'axios';

const REACT_APP_API_URL = 'http://localhost:6010';

const APIService = {
  get: (url) => axios.get(`${REACT_APP_API_URL}${url}`)
    .then((res) => res)
    .catch((error) => {
      console.warn(error); // eslint-disable-line
      throw new Error(error);
    }),
};

export default APIService;
