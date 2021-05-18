import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBGbdtGrRahPOvW9q5fM6zJXudCiB9Ei5U",
    authDomain: "e-commerce-40257.firebaseapp.com",
    projectId: "e-commerce-40257",
    storageBucket: "e-commerce-40257.appspot.com",
    messagingSenderId: "415617347287",
    appId: "1:415617347287:web:2ce0fb645eb7263c444a92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
