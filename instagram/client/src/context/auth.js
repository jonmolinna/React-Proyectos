import React, { createContext, useReducer, useContext } from 'react';
import jwtDecode from 'jwt-decode';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

let user = null;

const token = localStorage.getItem('tokenInstagram');

if(token){
    const decodedToken = jwtDecode(token);
    const expiresAt = new Date(decodedToken.exp * 1000)

    if(new Date() > expiresAt){
        localStorage.removeItem('tokenInstagram');
    } else {
        user = decodedToken;
    }
} else {
    console.log('No token found')
}

const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            localStorage.setItem('tokenInstagram', action.payload.token)
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            localStorage.removeItem('tokenInstagram')
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { user });

    return (
        <AuthDispatchContext.Provider value={dispatch}>
            <AuthStateContext.Provider value={state}>
                { children }
            </AuthStateContext.Provider>
        </AuthDispatchContext.Provider>
    )
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);