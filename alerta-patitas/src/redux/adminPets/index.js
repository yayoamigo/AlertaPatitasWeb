import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { publicRequestAdoptionPets } from '../../utils/requestsMethods';


const initialState = {
    pets: [] ,
    isFetching: false,
    error: null,
};


export const fetchPets = createAsyncThunk('adoptionPets/fetchPets', async () => {
    const response = await publicRequestAdoptionPets.get('.json');
    const data = response.data;
    return data ? Object.entries(data)
      .map(([id, pet]) => ({ ...pet, id }))
      .filter(pet => pet !== null) : [];
});


export const fetchPetsbyShelter = createAsyncThunk('adoptionPets/fetchPetsbyShelter', async (shelterId) => {
    const response = await fetch(publicRequestAdoptionPets + `?shelterId=${shelterId}`);
    return response.data;
});

export const postPets = createAsyncThunk('adoptionPets/postPets', async (pet) => {
    const response = await publicRequestAdoptionPets.post('.json', pet);
    return { ...pet, id: response.data.name };
});

export const deletePet = createAsyncThunk('adoptionPets/deletePet', async (id) => {
    await publicRequestAdoptionPets.delete(`/${id}.json`);
    return id;
});

export const updatePetStatus = createAsyncThunk('adoptionPets/updateStatus', async (id) => {
    const response = await publicRequestAdoptionPets.patch(`/${id}.json`, {
        status: 'Adoptado'
    });
    return { id, status: response.data.status };
});

export const updatePet = createAsyncThunk('adoptionPets/updatePet', async ({petId, updatedData}) => {
    try {
        await publicRequestAdoptionPets.put(`/${petId}.json`, updatedData);
        return { petId, updatedData };
    } catch (error) {
        console.error(error);
        throw error;
    }
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
        });
        builder.addCase(fetchPets.fulfilled, (state, action) => {
            state.isFetching = false;
            state.pets = action.payload;
            state.error = null;
        });
        builder.addCase(fetchPets.rejected, (state, action) => {
            state.isFetching = false;
            state.error = action.error.message;
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
        builder.addCase(deletePet.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(deletePet.fulfilled, (state, action) => {
            state.isFetching = false;
            state.pets = state.pets.filter(pet => pet.id !== action.payload);
        });
        builder.addCase(deletePet.rejected, (state) => {
            state.isFetching = false;
            state.error = true;
        });
        builder.addCase(updatePetStatus.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(updatePetStatus.fulfilled, (state, action) => {
            state.isFetching = false;
            const index = state.pets.findIndex(pet => pet.id === action.payload.id);
            if (index !== -1) {
                state.pets[index].status = action.payload.status;
            }
        });
        builder.addCase(updatePetStatus.rejected, (state) => {
            state.isFetching = false;
            state.error = true;
        });
        builder.addCase(updatePet.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(updatePet.fulfilled, (state, action) => {
            state.isFetching = false;
            state.pets = state.pets.map(pet => 
                pet.id === action.payload.petId 
                    ? {...pet, ...action.payload.updatedData} 
                    : pet
            );
        });
        builder.addCase(updatePet.rejected, (state) => {
            state.isFetching = false;
            state.error = true;
        });
    },
    
});


export const {addPet} = adoptionPetsSlice.actions;
export default adoptionPetsSlice.reducer;
