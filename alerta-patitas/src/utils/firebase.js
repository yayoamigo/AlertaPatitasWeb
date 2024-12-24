// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaVh6inbteoEc6Yi4gAiuUCkmXR6iLM20",
  authDomain: "alerta-patitas.firebaseapp.com",
  databaseURL: "https://alerta-patitas-default-rtdb.firebaseio.com",
  projectId: "alerta-patitas",
  storageBucket: "alerta-patitas.appspot.com",
  messagingSenderId: "914753809296",
  appId: "1:914753809296:web:4f08965450dc00729aa115"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


