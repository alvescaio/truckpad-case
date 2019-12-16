import reduceTruckers, {Creators, Types} from './truckers';
import truckersData from "../../data/truckers.json";

const INITIAL_STATE = { truckers: truckersData };

describe('Creators', () => {

    it('should create an action to add Trucker', () => {
        const trucker = {}
        const expectedAction = {
            type: Types.ADD,
            trucker
        }
        expect(Creators.addTrucker(trucker)).toEqual(expectedAction)
    })

    it('should create an action to change Trucker `active` property', () => {
        const trucker = {}
        const expectedAction = {
            type: Types.CHANGE_ACTIVE,
            trucker
        }
        expect(Creators.changeActive(trucker)).toEqual(expectedAction)
    })

    it('should create an action to remove an Trucker', () => {
        const trucker = {
            id: 0
        }
        const id = 0
        const expectedAction = {
            type: Types.REMOVE,
            id
        }
        expect(Creators.removeTrucker(trucker.id)).toEqual(expectedAction)
    })

    it('should create an action to edit an Trucker', () => {
        const trucker = {}
        const expectedAction = {
            type: Types.EDIT,
            trucker
        }
        expect(Creators.editTrucker(trucker)).toEqual(expectedAction)
    })
})

describe('Truckers reducers', () => {
    it('should handle ADD', () => {
        const trucker = {
            "id": 4,
            "active": true,
            "name": "Bino Fernandes Silva",
            "birth_date": "1976-09-22T00:00:00",
            "state": "SP",
            "city": "São Paulo",
            "phone": "11997546101",
            "documents": [
                {
                    "expires_at": "2010-11-23T00:00:00+00:00",
                    "country": "BR",
                    "number": "700441702",
                    "doc_type": "CNH",
                    "category": "AB"
                },
                {
                    "country": "BR",
                    "number": "32132132188",
                    "doc_type": "CPF"
                }
            ]
        }
        const expectedResult = {...INITIAL_STATE, truckers: [...INITIAL_STATE.truckers, trucker]}
        expect(
            reduceTruckers(INITIAL_STATE, Creators.addTrucker(trucker))
        )
        .toEqual(expectedResult)
    })
})





