import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const loginUser = createAsyncThunk('user/loginUser', async (loginData) => {
    console.log(loginData);
    const request = await axios.post('http://localhost:8000/api/login',loginData);
    console.log(request);
    const response = await request.data;
    localStorage.setItem('token', response.token);
    localStorage.setItem('user_name', response.user_name);
    
    return response;
})


const token = localStorage.getItem('token') ?? null;
const INITIAL_STATE = {
    isLoggedIn : null,
    userName : null,
    token : token
};
const authSlice = createSlice({
    name:"auth",
    initialState : INITIAL_STATE,
    extraReducers: (builder)=>{
        builder.addCase(loginUser.pending,(state)=>{
            state.isLoggedIn = null;
        }).addCase(loginUser.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.isLoggedIn = action.payload;
            state.userName = action.payload.email;
            state.token = action.payload.token
        }).addCase(loginUser.rejected,(state, action) =>{
            state.isLoggedIn = null;
        })   
    

    },
});

// export const authActions = authSlice.actions;
export const authActions = authSlice.actions;

export default authSlice;