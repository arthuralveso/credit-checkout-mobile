import axios from "axios";

export const api = axios.create({
    baseURL: 'http://fake-url-to-request/',
})