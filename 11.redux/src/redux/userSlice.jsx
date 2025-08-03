import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const myState = {
    users : [],
    loading : false
}


export const getAllUsers = createAsyncThunk('users', async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
})


export const userSlice = createSlice({
    name : "user",
    initialState : myState, // bu myState ismi initialState olsaydı burada tekrar tanımlamaya gerek kalmayacaktı counterSlice.jsx'deki gibi (trick)
    reducers : {
        // http isteği olmazsa kullanılır !
    },
    // http isteği olursa extraReducers kullanılır ve paremetre olarak builder verilir (kalıplaşmış ifade)
    extraReducers : (builder) => {
        // Http isteklerinde kullanılır
        builder.addCase(getAllUsers.fulfilled , (state, action) => {
            state.users = action.payload;
        })
    }
})

export const {} = userSlice.actions
export default userSlice.reducer