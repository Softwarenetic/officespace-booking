import axios from 'axios';
import {configs} from "./config";

const instance = axios.create({
    baseURL: configs.baseUrl
});

instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`;

export default instance;
