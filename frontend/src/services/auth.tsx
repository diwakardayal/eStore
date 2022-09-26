import axios from "axios";
import { URL } from "../endpoint";

export const LoginApi = async (data: any) => {
  return axios
    .post(`${URL}/api/login`, data)
    .then((res: any) => res.data)
    .catch((e: any) => console.log(e));
};

export const RegisterApi = async (data: any) => {
  return axios
    .post(`${URL}/api/register`, data)
    .then((res: any) => res.data)
    .catch((e: any) => console.log(e));
};
