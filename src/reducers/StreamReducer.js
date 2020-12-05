import { CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAMS } from '../actions/types';

const StreamReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return action.payload
        case CREATE_STREAM:
            return action.payload
        case EDIT_STREAM:
            return action.payload
        case DELETE_STREAM:
            return action.payload
        default:
            return state;
    }
}

export default StreamReducer;