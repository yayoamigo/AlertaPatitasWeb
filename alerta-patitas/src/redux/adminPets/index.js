import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { publicRequestAdoptionPets } from '../../utils/requestsMethods';


const initialState = {
    pets: [] ,
    isFetching: false,
    error: false,
};


export const fetchPets = createAsyncThunk('adoptionPets/fetchPets', async () => {
    const response = await publicRequestAdoptionPets.get('/');
    const data = response.data;
    const petsArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
    
      return petsArray;
});


export const fetchPetsbyShelter = createAsyncThunk('adoptionPets/fetchPetsbyShelter', async (shelterId) => {
    const response = await fetch(publicRequestAdoptionPets + `?shelterId=${shelterId}`);
    return response.data;
});

export const postPets = createAsyncThunk('adoptionPets/postPets', async (pet) => {
    const response = await publicRequestAdoptionPets.post('', pet);
    return response.data;
});

const adoptionPetsSlice = createSlice({
    name: 'adoptionPets',
    initialState,
    reducers: {
        addPet: (state, action) => {   
            state.pets.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPets.pending, (state) => {
            state.isFetching = true;
            state.error = false;
        });
        builder.addCase(fetchPets.fulfilled, (state, action) => {
            state.isFetching = false;
            state.pets = action.payload;
        });
        builder.addCase(fetchPets.rejected, (state) => {
            state.isFetching = false;
            state.error = true;
        });
        builder.addCase(fetchPetsbyShelter.pending, (state) => {
            state.isFetching = true;
            state.error = false;
        });
        builder.addCase(fetchPetsbyShelter.fulfilled, (state, action) => {
            state.isFetching = false;
            state.pets = action.payload;
        });
        builder.addCase(fetchPetsbyShelter.rejected, (state) => {
            state.isFetching = false;
            state.error = true;
        });
        builder.addCase(postPets.pending, (state) => {
            state.isFetching = true;
            state.error = false;
        });
        builder.addCase(postPets.fulfilled, (state, action) => {
            state.isFetching = false;
            state.pets.push(action.payload);
        });
        builder.addCase(postPets.rejected, (state) => {
            state.isFetching = false;
            state.error = true;
        });
    },
    
});


export const {addPet} = adoptionPetsSlice.actions;
export default adoptionPetsSlice.reducer;
