import React from "react";

import styles from "./signup.module.scss";
import { NextPage } from "next";
import SignUp from "components/signUp";

const SignUpPage: NextPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.main}>
      <div className={styles.title}>Sign up to hangout</div>
      <SignUp />
    </div>
  </div>
  );
};
export default SignUpPage;
