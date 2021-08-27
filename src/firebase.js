
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyA4tbVaWXzDwKUf6UWYQe9dbOMN81tmcOA",
    authDomain: "react-todo-app-9211d.firebaseapp.com",
    projectId: "react-todo-app-9211d",
    storageBucket: "react-todo-app-9211d.appspot.com",
    messagingSenderId: "765952976792",
    appId: "1:765952976792:web:53cc93fafa61db20ededed",
    measurementId: "G-X5VJ7BWC1L"
}

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;

