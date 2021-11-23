import React, { createContext, useReducer, useContext } from 'react';
import jwtDecode from 'jwt-decode';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

let usuario = null;
let chatUser = null;

const token = localStorage.getItem('tokenImessage');
if(token){
    const decodedToken = jwtDecode(token)
    const expiresAt = new Date(decodedToken.exp * 1000)

    if(new Date() > expiresAt){
        localStorage.removeItem('tokenImessage');
    } else {
        usuario = decodedToken;
    }
    // console.log('>>>>>', decodedToken);
} else {
    console.log('No token found')
}

const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            localStorage.setItem('tokenImessage', action.payload.token)
            return {
                ...state,
                usuario: action.payload
            }
        case 'LOGOUT':
            localStorage.removeItem('tokenImessage')
            return {
                ...state,
                usuario: null
            }
        case 'SET_CHAT_USERNAME':
            return {
                ...state,
                chatUser: action.payload
            }
        case 'REMOVE_CHAT_USERNAME':
            return {
                ...state,
                chatUser: null,
            }
        default:
            return state
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { usuario, chatUser });

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