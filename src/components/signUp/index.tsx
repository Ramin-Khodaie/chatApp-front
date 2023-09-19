import React, { ChangeEvent, useRef } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";

import { ISignUpParams } from "types/api/auth";
import { useSignUpValidation } from "components/hooks/validation/signUpValidation";
import { useSignUp } from "hooks/react-query/auth";
import { UserAuthEnums } from "types/api/auth";
import CloseCircle from "iconsax-react/dist/cjs/CloseCircle";
import { toast } from "react-toastify";

import styles from "./signUp.module.scss";
import { routes } from "constants/routes";

const initialValues: ISignUpParams = {
  userName: "",
  email: "",
  avatar: null,
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

const SignUp: React.FC = () => {
  const { signUpValidation } = useSignUpValidation();
  const fileRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const {
    mutate: signUp,    
  } = useSignUp({
    onSuccess(data) {
      console.log(data.data);
      if (data && data.message === UserAuthEnums.DUPLICATE_USER) {
        toast.error(data.error.message);
      }
      if (data.message === UserAuthEnums.NEW_USER) {
        toast.success(`${data.message} added successflly`);
        router.push(routes.logIn);
      }
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: signUpValidation,
    onSubmit: async () => {
      await signUp(values);
    },
  });

  const _renderFormInput = (name: keyof ISignUpParams, type: string) => {
    return (
      <div className={styles.formControl}>
        <label>{`${name[0].toLocaleUpperCase()}${name.slice(1)}`}</label>
        <input
          name={name}
          placeholder={name}
          value={values[name] as string}
          onChange={handleChange}
          onBlur={handleBlur}
          type={type}
        />
        {errors[name] && touched[name] ? <span>{errors[name]}</span> : ""}
      </div>
    );
  };

  const handleUplaodFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFieldValue("avatar", e.target.files[0]);
  };

  const removeUploadeFile = () => {
    setFieldValue("avatar", "");
  };
  const handleClickInput = () => {
    fileRef?.current?.click();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {_renderFormInput("userName", "text")}
      {_renderFormInput("email", "email")}
      {_renderFormInput("password", "password")}
      {_renderFormInput("confirmPassword", "password")}
      {_renderFormInput("phoneNumber", "tel")}
      <div className={styles.formControl}>
        <input ref={fileRef} type="file" onChange={handleUplaodFile} />
        <div className={styles.upload} onClick={handleClickInput}>
          Select your avatar
        </div>
        <div className={styles.fileContainer}>
          <span className={styles.fileName}>
            {values.avatar ? values.avatar.name : ""}
          </span>
          <CloseCircle onClick={removeUploadeFile} />
        </div>
      </div>
      <div className={styles.formControl}>
        <button type="submit">SignUp</button>
      </div>
    </form>
  );
};

export default SignUp;
