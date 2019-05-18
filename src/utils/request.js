import axios from 'axios'

const instance = axios.create({
    headers: {
      'Content-Type': 'application/json'
    },
    baseURL: 'https://www.carqueryapi.com/api/0.3'
  });

