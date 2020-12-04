import _ from 'lodash';
import { CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAMS, GET_STREAM } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ..._.mapKeys(action.payload, 'id') }
        case GET_STREAM:
            return action.payload
        case CREATE_STREAM:
            return { ...state, ...action.payload }
        case EDIT_STREAM:
            return { ...state, ...action.payload }
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        default:
            return state;
    }
} 