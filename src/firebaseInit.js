import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8YB8twFZ61Q8oxEP2yCsBVlMVNXCRxVM",
    authDomain: "oqaatsit-database.firebaseapp.com",
    projectId: "oqaatsit-database",
    storageBucket: "oqaatsit-database.appspot.com",
    messagingSenderId: "457963371989",
    appId: "1:457963371989:web:0859555e91b18f52dc915c",
    measurementId: "G-PE2F62LTHR"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);