import firebase from 'firebase';
import 'firebase/firestone';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCxDjdL3sHHsarLKhMb-PtWYfiazDY2Vv4",
    authDomain: "react-redux-firebase-app-be1b0.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-app-be1b0.firebaseio.com",
    projectId: "react-redux-firebase-app-be1b0",
    storageBucket: "react-redux-firebase-app-be1b0.appspot.com",
    messagingSenderId: "200909708360",
    appId: "1:200909708360:web:5901762fd4a1c8cc4f8c7d",
    measurementId: "G-NKY11J1TZ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;