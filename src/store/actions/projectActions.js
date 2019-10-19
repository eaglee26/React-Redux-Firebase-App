export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, gerFirestore }) => {
        // Делаем ассинхронный запрос в базу 
        dispatch({type: 'CREATE_PROJECT', project});
    }
};