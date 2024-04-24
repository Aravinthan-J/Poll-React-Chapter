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
