import React, { createContext, useReducer, useContext } from 'react';
import { TYPES } from './actions/userActions.js';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

let username = null;
let group_chat = null;

const authReducer = (state, action) => {
    switch(action.type) {
        case TYPES.LOGIN:
            return {
                ...state,
                username: action.payload,
            }
        case TYPES.LOGOUT:
            return {
                ...state,
                username: null,
            }
        case TYPES.GROUP_CHAT:
            return {
                ...state,
                group_chat: action.payload,
            }
        case TYPES.GROUP_CHAT_NULL:
            return {
                ...state,
                group_chat: null,
            }
        default:
            return state
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { username, group_chat });

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