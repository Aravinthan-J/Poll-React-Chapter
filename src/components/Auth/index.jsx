import styles from "./styles.module.css";

import Button from '@mui/material/Button';

import LoginSvg from "../../assets/login.svg";

export const Auth = () => {
  return (
    <div className={styles.authLayout}>
      <LoginSvg />
      <div className={styles.authBoxLayout}>
        <div className={styles.authBox}>
          <p>Welcome to Polly</p>
          <Button>Sign in with Google</Button>
        </div>
      </div>
    </div>
  );
};

// {state.userId ? <button onClick={signOutUser}>log out</button> : <button onClick={signInUser}>sign in</button>}
// const { 
//   login,
//   logout,
//   state
//  } = useContext(PollContext);

//  useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//     user && login(user.uid);
//   });

//   return () => unsubscribe();
// }, []);


// const signInUser = async () => {
//   try {
//     const response = await signInWithGooglePopup();
//     console.log("USER SIGNED IN");
//     login(response.user.uid);
//   } catch(err) {
//     console.log(err);
//   }
// };

// const signOutUser = async () => {
//   try {
//     const response = await signOut(auth);
//     console.log("USER SIGNEFD OUT", {response});
//     logout();
//   } catch(err) {
//     console.log(err);
//   }
// };