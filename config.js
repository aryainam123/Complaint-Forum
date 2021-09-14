import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyCzUfmUg9E3tS5qkwZHrVV2yDFFRmPLTAo",

  authDomain: "complaint-forum-be911.firebaseapp.com",

  projectId: "complaint-forum-be911",

  storageBucket: "complaint-forum-be911.appspot.com",

  messagingSenderId: "632365077752",

  appId: "1:632365077752:web:20380118957218e9e1170d"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

