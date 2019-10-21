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
        //reactReduxFirebase(firebase, {attachAuthIsReady: true}),
    )
);

const rrfProps = {
    firebase,
    config: fdConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
