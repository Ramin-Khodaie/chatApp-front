/* eslint-disable complexity */
import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { useLogin } from "hooks/react-query/auth";
import styles from "./loginForm.module.scss";
import { UserAuthEnums } from "types/api/auth";
import { setUserCredentials } from "utils/auth";
import { signIn } from "next-auth/react";
interface ILoginProps {
  email: string;
  password: string;
}

const validateSchema = Yup?.object({
  email: Yup.string().required("email is required").email(),
  password: Yup.string(),
});

function LogInForm() {
  const initilaValue: ILoginProps = {
    email: "",
    password: "",
  };

  const router = useRouter();

  const { mutate: login } = useLogin({
    onSuccess: async (data) => {
      if (data.message === UserAuthEnums.PASSWORD_DOES_NOT_MATCH) {
        toast.error(`${UserAuthEnums.PASSWORD_DOES_NOT_MATCH}, Try again!`);
      }
      if (data.accessToken) {
        setUserCredentials(data.accessToken).then(() => {
          router.push("/home");
        });
      }
    },
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initilaValue,
      validationSchema: validateSchema,
      onSubmit: async (value: ILoginProps) => {
        const { email, password } = values;
        try {
          const result = await signIn("credentials", {
            redirect: true,
            callbackUrl: "localhost:3000",
            email,
            password,
          });
        } catch (error) {
          console.log({ error });
        }
      },
    });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formControl}>
        <label>Email</label>
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? <span>{errors.email}</span> : ""}
      </div>
      <div className={styles.formControl}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className={styles.signupLink}>
        <p>{`Don't have an account ?`}</p>
        <Link href="/signup">Sign Up</Link>
      </div>
      <div className={styles.formControl}>
        <button type="submit">sign in</button>
      </div>
      <div className={styles.googleBtn}>
        <div className={styles.googleIcon}>
          <Image
            className={styles.icon}
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google"
            width={25}
            height={25}
          />
        </div>
        <p className={styles.googleText}>Sign in with google</p>
      </div>
    </form>
  );
}

export default LogInForm;
