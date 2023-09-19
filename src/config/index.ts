import axios, { AxiosError } from "axios";


export const baseUrl: string = 'http://localhost:3001';

const axiosHandler = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-type": "application/json",
      },
});

axiosHandler.interceptors.response.use(undefined, (error: AxiosError) => {
    console.log({error})
    return Promise.reject(error);
})

export default axiosHandler;