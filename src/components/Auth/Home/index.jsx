import { useContext } from "react";
import { signOut } from "firebase/auth";

import { auth } from "../../../firebase.util";
import { PollContext } from "../../../context";

export const Home = () => {

    const { logout } = useContext(PollContext);

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
    <div>
    <nav style={{display: "flex", padding: "16px", background: "#eee", justifyContent: "space-between", alignItems: "center"}}>
      <h1>Polly</h1>
        <div>
          <button onClick={signOutUser}>Sign Out</button>
        </div>
    </nav>
    <main>
      Test 123
    </main>
    </div>
    );
}