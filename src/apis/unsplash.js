import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eb7b2eb848db100078f05e4b7dd834eea0cacfbc3f6c6c030d5826b917afb4a6'
    }
});