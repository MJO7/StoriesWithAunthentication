import * as firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDMIw9JW6VxQl6Az0ugj_H0Mrq-ZXDqPRI",
  authDomain: "stories-47099.firebaseapp.com",
  projectId: "stories-47099",
  storageBucket: "stories-47099.appspot.com",
  messagingSenderId: "148592561059",
  appId: "1:148592561059:web:5831934028eb70bc976816",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
