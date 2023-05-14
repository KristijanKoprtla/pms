import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDlWoSQ5Fydd16ya64S25qLsU3x7Yg8Yh0",
    authDomain: "thedojo-97c30.firebaseapp.com",
    projectId: "thedojo-97c30",
    storageBucket: "thedojo-97c30.appspot.com",
    messagingSenderId: "811553931605",
    appId: "1:811553931605:web:3f85135ae2c00c862aafdc"
  }

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp }
