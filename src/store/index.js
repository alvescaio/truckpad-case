import { createStore } from 'redux';

import usersData from '../data/users.json';

const INITIAL_USERS = usersData;

function reducer(state = INITIAL_USERS, action) {
    if(action.type === 'ADD_USER'){
        console.log([...state, action.user])
        return [
            ...state,
            action.user
        ]
    }
    return state;
}

// function users(state, action){
//     switch (action.type) {
//         case 'ADD_USER':
//             return {
//                 ...state,

//             }
//     }
// }

const store = createStore(reducer);

export default store;