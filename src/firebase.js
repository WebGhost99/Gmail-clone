import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBMYsDrbZhbBdWXgZ-4bleX7XvWNSmvv1Y",
    authDomain: "clone-52075.firebaseapp.com",
    projectId: "clone-52075",
    storageBucket: "clone-52075.appspot.com",
    messagingSenderId: "919689679320",
    appId: "1:919689679320:web:362feb569d223e529f62ad"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db , auth , provider }