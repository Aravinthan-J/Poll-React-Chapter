import { Auth } from "./components/Auth";

import { useContext, useEffect } from "react";
// import { signInWithGooglePopup, auth } from "./firebase.utils"
import { signOut, onAuthStateChanged } from "firebase/auth";

import { PollContext } from "./context";

import "./App.css";

function App() {
  return <Auth />;
}

export default App;
