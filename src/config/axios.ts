import axios, { AxiosError } from "axios";
import config from "config";
import Cookies from "js-cookie";

const axiosHandler = axios.create({
  baseURL: config.api.url,
  headers: {
    "Content-type": "application/json",
  },
});

axiosHandler.interceptors.request.use(config => {
  config.headers['Authorization'] = 'Bearer ' + Cookies.get("Authorization");
  return config;
})

axiosHandler.interceptors.response.use(undefined, (error: AxiosError) => {
  const token = Cookies.get("Authorization");
  console.log({ token });
  return Promise.reject(error);
});

export default axiosHandler;

