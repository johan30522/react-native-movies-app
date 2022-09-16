import axios from 'axios';

const movieDb=axios.create({
     timeout: 5000,
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '68d2106c31d7a6a2c97a932d0ce0eca6',
        language: 'es-ES'
    }
});
export default movieDb;