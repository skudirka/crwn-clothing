import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC8LvsGLquNCd4pxQPQDG-u5WiLIjqN7-s",
    authDomain: "crwn-db-8f52a.firebaseapp.com",
    databaseURL: "https://crwn-db-8f52a.firebaseio.com",
    projectId: "crwn-db-8f52a",
    storageBucket: "",
    messagingSenderId: "945156179165",
    appId: "1:945156179165:web:24b6d8589c9de598"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;