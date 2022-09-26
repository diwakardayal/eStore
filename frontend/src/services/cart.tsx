import react from "react";
import axios from "axios";

import { URL } from "../endpoint";

export const AddtoCart = async (data: any) => {
  const token = sessionStorage.getItem("Token");

  const gg = JSON.stringify(data);

  // if (!token) {
  //   throw Error;
  // }
  return axios
    .post(`${URL}/api/cart/push`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => console.log(e));
};

export const GetCart = async () => {
  return axios
    .get(`${URL}/api/cart`)
    .then((res) => res)
    .catch((e) => console.log(e));
};

export const WishList = async (data: any) => {
  return axios
    .post(`${URL}/api/wishlist`, data)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => console.log(e));
};
