export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Делаем ассинхронный запрос в базу 
        const firestore = getFirestore();
        firestore.collection('project').add({
            ...project,
            authorFirstName: 'lol',
            authorLastName: 'lox',
            authorId: 123456,
            createdDate: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
};