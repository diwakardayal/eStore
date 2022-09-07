import axios from "axios";
import { URL } from "../endpoint";

export const Login = async (data: any) => {
  return axios
    .post(`${URL}/api/login`, data)
    .then((res: any) => res.data)
    .catch((e: any) => console.log(e));
};

export const Register = async (data: any) => {
  return axios
    .post(`${URL}/api/register`, data)
    .then((res: any) => res.data)
    .catch((e: any) => console.log(e));
};
