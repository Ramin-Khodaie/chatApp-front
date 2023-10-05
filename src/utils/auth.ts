import axios from "axios";
import Cookies from "js-cookie";

export const setUserCredentials = async (accessToken: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  Cookies.set("Authorization", accessToken);
};

export const getUserCredentials = async () => {
  return Cookies.get("Authorization");
};

export const getUser = async (accessToken: string) => {
  return getUser;
};

