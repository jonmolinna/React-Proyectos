import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://whatsapp-proyecto-clone.herokuapp.com/api/message'

});

export default instance;

//'http://localhost:9000/api/message'