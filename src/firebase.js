import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvWTKedxm33blX5Xv0pEOjDzz4yZuBlQ8",
    authDomain: "facebook-clone-67f64.firebaseapp.com",
    projectId: "facebook-clone-67f64",
    storageBucket: "facebook-clone-67f64.appspot.com",
    messagingSenderId: "4949758125",
    appId: "1:4949758125:web:4088dc3230c748d535b624"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;