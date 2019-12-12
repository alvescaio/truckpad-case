import truckersData from "../../data/users.json";

export const Types = {
    ADD: "truckers/ADD",
    CHANGE_ACTIVE: "truckers/CHANGE_ACTIVE",
    REMOVE: "truckers/REMOVE"
}

const stateStorage = localStorage.getItem('state');
const INITIAL_STATE = stateStorage ? JSON.parse(stateStorage) : { truckers: truckersData };

export default function truckers(state = INITIAL_STATE, action) {
    let newState = {};
    switch(action.type){
        case Types.ADD:
            let id = parseInt(state.truckers.slice(-1)[0].id) + 1;
            action.trucker.id = id;
            console.log(state.truckers)
            newState = {
                ...state,
                truckers: [
                    ...state.truckers,
                    action.trucker
                ]
            };
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;

        case Types.CHANGE_ACTIVE:
            newState = {
                ...state,
                truckers: state.truckers.map( trucker => trucker.id === action.trucker.id ? { ...trucker, active: !trucker.active } : trucker)
            }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;

        case Types.REMOVE:
            newState = {
                ...state,
                truckers: state.truckers.filter( trucker => trucker.id != action.id )
            }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
}

export const Creators = {
    addTrucker: ( trucker ) => ({
        type: Types.ADD,
        trucker
    }),

    removeTrucker: ( id ) => ({
        type: Types.REMOVE,
        id
    }),
    
    changeActive: ( trucker ) => ({
        type: Types.CHANGE_ACTIVE,
        trucker,
    })

}