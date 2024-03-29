import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {
    //const id = props.match.params.id;
    console.log(props);
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to='/signin'/>;
    if(project){
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container section project-details">
                <p>Loading...</p>
            </div>
        )
    }
};

const mapStateToProps = (state, ownPorops) => {
    console.log(state);
    
    const id = ownPorops.match.params.id;
    const projects = state.firestore.data.project;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth,
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'project'}
    ]),
)(ProjectDetails);