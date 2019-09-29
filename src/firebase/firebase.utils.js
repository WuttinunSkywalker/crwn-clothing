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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;