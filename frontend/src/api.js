import axios from 'axios';


export default axios.create({
  baseURL: 'http://localhost/api/',
  // timeout: 5000,
  xsrfHeaderName: 'X-CSRFToken',
  xsrfCookieName: 'csrftoken',
  headers: {
    'Content-Type': 'application/json',
  },
});
