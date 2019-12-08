import { createStore } from 'redux';

import usersData from '../data/users.json';

const INITIAL_STATE = {
    users: usersData,
}



function reducer(state = INITIAL_STATE, action) {
    if(action.type === 'ADD_USER'){
        return {
            ...state,
            users: [
                ...state.users,
                action.user
            ]
        }
    }

    if(action.type === 'DELETE_USER'){
        return {
            ...state,
            users: state.users.filter( user => user.id != action.id )
        }
    }

    if(action.type === 'CHANGE_ACTIVE'){
        return {
            ...state,
            users: state.users.map( user => user.id === action.user.id ? { ...user, active: !user.active } : user)
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;