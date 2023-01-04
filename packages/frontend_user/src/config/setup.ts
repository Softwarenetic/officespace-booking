import axios from "axios";
import { configs } from "./config";

const AUTH_LOCALSTORAGE_KEY  = 'AuthData';

export const setupAxiosBaseUrl = () => axios.defaults.baseURL =  configs.baseUrl;
export const setupAxiosAuth = () => {
    const token = getAuthToken();
    
    if(!token){
        return;
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const setAuhtToken = (token:string) => {
    localStorage.setItem(AUTH_LOCALSTORAGE_KEY, token);
}

export const getAuthToken = (): string | null => localStorage.getItem(AUTH_LOCALSTORAGE_KEY);

export const removeAuthToken = () => localStorage.removeItem(AUTH_LOCALSTORAGE_KEY);
    
