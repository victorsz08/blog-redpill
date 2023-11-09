import axios from "axios";

const http = axios.create({
    baseURL: 'http://52.67.237.110:3000',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

export default http;