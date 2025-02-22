import axios from "axios";


const BASE_URL = `${import.meta.env.VITE_FIREBASE_DATABASE_URL}/adoptionPets`;

 const BASE_URL2 = import.meta.env.VITE_FIREBASE_DATABASE_URL ;
 console.log(BASE_URL2);

const token = localStorage.getItem("accessToken") || "{}";
const TOKEN = token;

export const publicRequestAdoptionPets = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});


publicRequestAdoptionPets.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
});

export {};
