import { TYPES } from './actions/userActions.js';

export const userInitialState = {
    user: null,
};

export function userReducer(state, action){
    switch(action.type){
        case TYPES.USER_LOGIN: {
            return {
                user: action.payload,
            }  
        }
        default:
            return state
    }
};