import { FETCH_USER } from './../actions'

export default (state = { data: [] }, action ) => {
    switch(action.type) {
        case FETCH_USER: {
            return {...state, data: [...state.data,action.payload] }
        }
        default:
            return state;
    }
}