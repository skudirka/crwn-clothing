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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if( !userAuth ) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if( !snapShot.exists ){
        // add to DB
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;