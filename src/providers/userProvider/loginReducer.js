/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';

const loginURL = `http://localhost:8000/api/v1/users/login`;

export const LoginUser = createAsyncThunk("login/LoginUser", (_, thunkAPI) =>{
    try {
        axios.post(loginURL, {
    email: "moxiemeyoh@gmail.com",
    password: 'felloh'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    } catch (error) {
        console.log(error);
    }
})

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        islogedIn: false,
        name: " ",
        email: " ",
        photo: " ",
        authToken: " "
    },
    extraReducers: (builder)=>{
        builder
        .addCase(LoginUser.pending, (state) => {
            state.islogedIn = null;
            state.email = null;
            state.name = null;
            state.photo = null;
            state.authToken = null;
        })
        .addCase(LoginUser.fulfilled, (state, action) => {
            state.islogedIn = true;
        }).addCase(LoginUser.rejected, (state, action) => {
            state.islogedIn = null;
            state.email = null;
            state.name = null;
            state.photo = null;
            state.authToken = null;
        })
    },
});

export default loginSlice.reducer;