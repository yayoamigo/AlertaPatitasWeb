import { configureStore } from "@reduxjs/toolkit";
import adoptionPetsReducer from "../adminPets";



const store = configureStore({
    reducer: {
        adoptionPets: adoptionPetsReducer,
    },
});

export default store;