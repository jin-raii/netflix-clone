import axios from 'axios';

// Create an instance for making other requests
// This is the base url for other urls
const instance = axios.create({
    baseUrl: 'https://api.themoviedb.org/3'
})
console.log(instance.baseUrl, 'ins')
export default instance;