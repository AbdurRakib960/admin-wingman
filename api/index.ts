import axios from "axios";

// export const API_URL = 'https://cute-pink-beetle-coat.cyclic.app';
export const API_URL = 'https://server.wingmanai.io';
// export const API_URL = 'http://localhost:4400';

export const api = axios.create({
  baseURL: API_URL + '/api',
});
