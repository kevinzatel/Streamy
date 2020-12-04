import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.jsonbin.io/b/5fcab07e516f9d1270282b96',
    headers: {
        'secret-key': '$2b$10$AZbkvebds7gqLFr5gDz9vuCH7h.R20PcF8cEXDmQAdQZbZw2IXkHe'
    }
});