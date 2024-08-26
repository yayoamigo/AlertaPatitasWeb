import axios from "axios";

const BASE_URL = "https://alerta-patitas-default-rtdb.firebaseio.com/adoptionPets.json";
const token = localStorage.getItem("accessToken") || "{}";
const TOKEN = token

export const publicRequestAdoptionPets = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
  });

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
   
});


export {};
