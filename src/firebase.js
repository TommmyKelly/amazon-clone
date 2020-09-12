import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyCaOT2VqBZg4ItVnOvQRevT_NSs5lC8020",
  authDomain: "e-clone-68cb6.firebaseapp.com",
  databaseURL: "https://e-clone-68cb6.firebaseio.com",
  projectId: "e-clone-68cb6",
  storageBucket: "e-clone-68cb6.appspot.com",
  messagingSenderId: "448557030655",
  appId: "1:448557030655:web:5f7c9108ba25fd6c6bc0ca"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};