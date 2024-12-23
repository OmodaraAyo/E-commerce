import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: localStorage.getItem("username") || '',
    email: localStorage.getItem("email") || '',
    password: localStorage.getItem("password") || '',
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const {username, email, password} = action.payload;
            state.username = username;
            state.email = email;
            state.password = password;

            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("isAuthenticated", 'true')
        },

        login: (state, action) => {
           const{email, password } = action.payload;

           const storedEmail = localStorage.getItem('email')
           const storedPassword = localStorage.getItem('password')
            
           if(email === storedEmail && password === storedPassword){
            state.isAuthenticated = true;
            localStorage.setItem("isAuthenticated", 'true')
           }else {
            state.isAuthenticated = false;
            state.error = 'Invalid username or password'
           }
        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.username = '';
            state.email = '';
            state.password = '';

            // localStorage.removeItem('username')
            // localStorage.removeItem('email')
            // localStorage.removeItem('password')
            // localStorage.removeItem("isAuthenticated")
        },
    }
})

export const {setCredentials, login, logout} = authSlice.actions;

export default authSlice.reducer;