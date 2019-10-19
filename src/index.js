import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fdConfig from './firebaseConfig/fbConfig';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase),
        //reactReduxFirebase(firebase),
    )
);

const rrfProps = {
    firebase,
    config: fdConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();

// import React from "react";
// import ReactDOM from 'react-dom';
// import { Provider } from "react-redux";
// import rootReducer from './store/reducers/rootReducers';
// import { createStore, applyMiddleware } from "redux";
// import firebase from "firebase/app";
// import "firebase/database";
// import { ReactReduxFirebaseProvider } from "react-redux-firebase";
// //import createStore from "./createStore";
// import App from './App';
// import './index.css';
// import * as serviceWorker from './serviceWorker';

// const fbConfig = {
//     apiKey: "AIzaSyCxDjdL3sHHsarLKhMb-PtWYfiazDY2Vv4",
//     authDomain: "react-redux-firebase-app-be1b0.firebaseapp.com",
//     databaseURL: "https://react-redux-firebase-app-be1b0.firebaseio.com",
//     projectId: "react-redux-firebase-app-be1b0",
//     storageBucket: "react-redux-firebase-app-be1b0.appspot.com",
//     messagingSenderId: "200909708360",
//     appId: "1:200909708360:web:5901762fd4a1c8cc4f8c7d",
//     measurementId: "G-NKY11J1TZ6"
// };

// try {
//     firebase.initializeApp(fbConfig);
// } catch (err) { }

// const store = createStore(() => [], {}, applyMiddleware());


// const rrfProps = {
//     firebase,
//     config: {
//         userProfile: "users"
//     },
//     dispatch: store.dispatch
// };

// ReactDOM.render(
//     <Provider store={store}>
//         <ReactReduxFirebaseProvider {...rrfProps}>
//             <App />
//         </ReactReduxFirebaseProvider>
//     </Provider>
//     , document.getElementById('root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
