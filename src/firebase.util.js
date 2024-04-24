import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { nanoid } from "nanoid"

const firebaseConfig = {
    apiKey: "AIzaSyAJMsl-DUS_1ZUYkHWo-7ecaZ_udUm_h2o",
    authDomain: "polling-sys.firebaseapp.com",
    databaseURL: "https://polling-sys-default-rtdb.firebaseio.com",
    projectId: "polling-sys",
    storageBucket: "polling-sys.appspot.com",
    messagingSenderId: "518429794804",
    appId: "1:518429794804:web:aabb01591424938a7759a1"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
  
provider.setCustomParameters({   
    prompt : "select_account "
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getDatabase();

const createQuestion = (payload) => {
  const uniqueID = nanoid();
  const dbRef = ref(db, "question/ "+uniqueID);
  set(dbRef, {id: uniqueID,  ...payload});  
}


export { createQuestion};