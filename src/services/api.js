import axios from 'axios'
const api = axios.create({
    baseURL: 'https://api-demo.daniel-avellaneda.com/',
});

export default api