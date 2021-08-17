
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwabIgwt8elQpXLtK_3nJjvY45MryC9KA",
  authDomain: "company-details-33f26.firebaseapp.com",
  projectId: "company-details-33f26",
  storageBucket: "company-details-33f26.appspot.com",
  messagingSenderId: "1066838391885",
  appId: "1:1066838391885:web:9ac7cef27c6d4fea873004",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();