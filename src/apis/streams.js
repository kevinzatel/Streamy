import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.jsonbin.io/b/5fcb0f1c2946d2126ffe6217',
    headers: {
        'secret-key': '$2b$10$Zqq4nNKlSNN0Itp.lHO03OYu0G9Sjh6G7.ViB2ughee238k7Joun.'
    }
});