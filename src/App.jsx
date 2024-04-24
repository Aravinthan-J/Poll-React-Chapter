import { Auth } from "./components/Auth";

import { useContext, useEffect } from "react";
import { signInWithGooglePopup, auth } from "./firebase.utils"
import { signOut, onAuthStateChanged } from "firebase/auth";

import { PollContext } from "./context";

import "./App.css";

function App() {

  const { 
    login,
    logout,
    state
   } = useContext(PollContext);

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user && login(user.uid);
    });

    return () => unsubscribe();
  }, []);


  const signInUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      console.log("USER SIGNED IN");
      login(response.user.uid);
    } catch(err) {
      console.log(err);
    }
  };

  const signOutUser = async () => {
    try {
      const response = await signOut(auth);
      console.log("USER SIGNEFD OUT", {response});
      logout();
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <Auth />
  )
}

export default App