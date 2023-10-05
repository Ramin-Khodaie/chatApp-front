import React from "react";
import styles from "./signin.module.scss";
import LoginForm from "modules/login";
import { NextPage } from "next";

const LogInPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>Sign in to hangout</div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LogInPage;
