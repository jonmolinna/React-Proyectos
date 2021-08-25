import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://messenger-clone-proyecto.herokuapp.com/'
});

export default instance;