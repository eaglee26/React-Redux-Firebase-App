export const createProject = (project) => {
    return (dispatch, getState) => {
        // Делаем ассинхронный запрос в базу 
        dispatch({type: 'CREATE_PROJECT', project});
    }
};