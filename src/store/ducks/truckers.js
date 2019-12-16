import truckersData from "../../data/truckers.json";

export const Types = {
    ADD: "truckers/ADD",
    CHANGE_ACTIVE: "truckers/CHANGE_ACTIVE",
    REMOVE: "truckers/REMOVE",
    EDIT: "truckers/EDIT"
}

const stateStorage = localStorage.getItem('state');
const INITIAL_STATE = stateStorage ? JSON.parse(stateStorage) : { truckers: truckersData };

export default function truckers(state = INITIAL_STATE, action) {
    let newState = {};
    switch(action.type){
        
        case Types.ADD:
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
            };
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;

        case Types.REMOVE:
            newState = {
                ...state,
                truckers: state.truckers.filter( trucker => trucker.id != action.id )
            };
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        
        case Types.EDIT:
            newState = {
                ...state,
                truckers: state.truckers.map(
                    trucker => trucker.id === action.trucker.id ? 
                    { ...trucker, ...action.trucker } :
                    trucker
                )
            };
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
    }),

    editTrucker: ( trucker ) => ({
        type: Types.EDIT,
        trucker,
    })

}