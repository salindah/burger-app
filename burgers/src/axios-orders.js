import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-6cbba.firebaseio.com/'
});

export default instance;