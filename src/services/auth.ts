import config from "config";
import axiosHandler from "config/axios";
import { urls } from "constants/urls";
import { ILoginParams, ISignUpParams } from "types/api/auth";

export const signUp = (params: ISignUpParams) => {
  return axiosHandler
    .post(urls.auth.signUp, params, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err.response?.data));
};

export const logIn = ({ email, password }: ILoginParams) => {
  return axiosHandler
    .post(urls.auth.logIn, { email, password })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err.response.data));
};

export const getUser = (token: string) => {
  return axiosHandler
    .get(urls.auth.getUser, { params: token })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err.response.data));
};

export const logOut = () => {
  return axiosHandler.delete(urls.auth.logOut).then((res) => res.data).catch((error) => Promise.reject(error.response?.data))
}