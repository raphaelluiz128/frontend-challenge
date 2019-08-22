import {create} from 'axios';

const api = create({

    baseURL:'https://restcountries.eu/rest/v2',
    headers: {
        'Content-Type': 'application/json',
      },
      
      timeout: 20000
});

export default api;