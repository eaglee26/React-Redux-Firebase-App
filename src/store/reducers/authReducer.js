const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN ERROR':
            console.log('log error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN SUCCESS':
            console.log('log success');
            return {
                ...state,
                authError: null
            }
        default:
            return state;
    }
};
export default authReducer;