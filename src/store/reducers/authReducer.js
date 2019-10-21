const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN ERROR':
            console.log('log error');
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'LOGIN SUCCESS':
            console.log('log success');
            return {
                ...state,
                authError: null
            };
        case 'SIGN_OUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGN_UP_SUCCESS':
            console.log('sign up success');
            return {
                ...state,
                authError: null
            };
        case 'SIGN_UP_ERROR':
                console.log('sign up error');
                return {
                    ...state,
                    authError: action.err.message
                };
        default:
            return state;
    }
};
export default authReducer;