import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA7YSx18_O5yqXAfkdjTV6sHLzjFnj36zs",
    authDomain: "todo-crud-36720.firebaseapp.com",
    projectId: "todo-crud-36720",
    storageBucket: "todo-crud-36720.appspot.com",
    messagingSenderId: "872046666060",
    appId: "1:872046666060:web:d8a8d9b206c48704876fe9"
  };

  const app =  initializeApp(firebaseConfig);
  const db = getFirestore(app);


  export {db};