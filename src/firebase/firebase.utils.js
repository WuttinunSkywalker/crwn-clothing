import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCKZxfByGGMw96x9J0GhXooS4uRJu3Wi4s",
  authDomain: "crwn-db-7e057.firebaseapp.com",
  databaseURL: "https://crwn-db-7e057.firebaseio.com",
  projectId: "crwn-db-7e057",
  storageBucket: "",
  messagingSenderId: "21214872700",
  appId: "1:21214872700:web:3231e57eea8554870275f9",
  measurementId: "G-1NT4QXC4EW"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    
    try {
      await userRef.set({
        displayName, 
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;