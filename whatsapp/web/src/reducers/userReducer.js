import { TYPES } from './actions/userActions';

export const userInitialState = {
    user: null,
    mensage: [],
    grupos: [],
};

export function userReducer(state, action){
    switch(action.type){
        case TYPES.USER_LOGIN: {
            return {
                ...state,
                user: state.user = action.payload,
            }  
        }
        case TYPES.GET_ALL_GRUPOS: {
            return {
                ...state,
                grupos: state.grupos = action.payload,
            }
        }
        case TYPES.GET_ALL_MESSAGE: {
            return {
                ...state,
                mensage: state.mensage = action.payload,
            }
        }
        case TYPES.ADD_MESSAGE: {
            return {
                ...state,
                mensage: [...state.mensage, action.payload]
            }
        }
        default:
            return state
    }
};