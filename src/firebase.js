// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyCqnovVkzqkWN7h7CMWv6FRpXUxz1RpYkg",
  authDomain: "portfolio-5bf79.firebaseapp.com",
  projectId: "portfolio-5bf79",
  storageBucket: "portfolio-5bf79.appspot.com",
  messagingSenderId: "840948528899",
  appId: "1:840948528899:web:b00fa913e9144224701b36"
});

var database = firebaseApp.firestore();

export {database};
