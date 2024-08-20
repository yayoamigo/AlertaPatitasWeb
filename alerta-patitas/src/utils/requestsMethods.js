import axios from "axios";

const BASE_URL = "https://alerta-patitas-default-rtdb.firebaseio.com/";
const token = localStorage.getItem("accessToken") || "{}";
const TOKEN = token

export const publicRequestAdoptionPets = axios.create({
    baseURL: `${BASE_URL}adoptionPets.json`,
    headers: { 'Content-Type': 'application/json' },
  });

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
   
});


export {};
