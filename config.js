import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB_QWZHxKhi4pRc3pCk4Pg6WFFpfn_hYa0",
  authDomain: "wily-s-5818b.firebaseapp.com",
  databaseURL: "https://wily-s-5818b.firebaseio.com",
  projectId: "wily-s-5818b",
  storageBucket: "wily-s-5818b.appspot.com",
  messagingSenderId: "644456823981",
  appId: "1:644456823981:web:13985a1a98c58994221a24"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
