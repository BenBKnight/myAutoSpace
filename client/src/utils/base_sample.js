import firebase from 'firebase'
import 'firebase/storage'

// Enter in your credentials and rename this file to base.js
export const app = firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
});
