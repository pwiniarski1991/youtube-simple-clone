import axios from 'axios'

const API_KEY = 'AIzaSyA3V8lVTE71t0pTYiYevJ026ONL1z8bc-w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: API_KEY,
        part: 'snippet',
        maxResults: 5
    }
})