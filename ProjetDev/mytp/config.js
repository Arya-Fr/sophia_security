import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, addDoc, setDoc, getDocs, updateDoc, increment, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIeES6uRopLNpIaribtPC13fsEw8qb8Qg",
  authDomain: "sophia-security.firebaseapp.com",
  projectId: "sophia-security",
  storageBucket: "sophia-security.appspot.com",
  messagingSenderId: "462726239989",
  appId: "1:462726239989:web:7085cd10d2e38c8b4197bc",
  measurementId: "G-9KJQ9F8CEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try {
    const docRef = await addDoc(collection(db, "User"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }


const docu = doc(db, "User");
console.log(docu);
