export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Делаем ассинхронный запрос в базу 
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        firestore.collection('project').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorID,
            createdDate: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
};