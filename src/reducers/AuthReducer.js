const INITIAL_STATE = {
    auth: null,
    isSignedIn: null,
    userId: null
};

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INIT':
            return { ...state, auth: action.payload }
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userId: action.payload }
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null }
        default:
            return state
    }
}

export default AuthReducer;