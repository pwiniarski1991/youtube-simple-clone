import { FETCH_POSTS } from '../actions'

export default (state = {}, { type, payload }) => {
    switch(type) {
        case FETCH_POSTS:
            return { ...state, data: payload }
        default:
            return state;
    }
}
