import { SELECT_STREAM, UNSELECT_STREAM } from "../actions/types"

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_STREAM:
            return { ...state, ...action.payload }
        case UNSELECT_STREAM:
            return null
        default:
            return state
    }
}