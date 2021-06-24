import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCtE6Zogl5x0Oq3W7u21QWSCrkUl0prUac",
    authDomain: "chatapp-7e7fe.firebaseapp.com",
    projectId: "chatapp-7e7fe",
    storageBucket: "chatapp-7e7fe.appspot.com",
    messagingSenderId: "526448125974",
    appId: "1:526448125974:web:3e910cb0967c4181ca2d37"
  }).auth();