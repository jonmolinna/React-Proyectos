import React, { createContext, useReducer, useContext } from 'react';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

let username = null;

const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                username: action.payload,
            }
        case 'LOGOUT':
            return {
                ...state,
                username: null,
            }
        default:
            return state
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(authReducer, { username });

    return (
        <AuthDispatchContext.Provider value={dispatch}>
            <AuthStateContext.Provider value={state}>
                { children }
            </AuthStateContext.Provider>
        </AuthDispatchContext.Provider>
    );
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);