import axios from "axios";
import { URL } from "../endpoint";

//post request to get specific product from inventory
export const getProductById = async (id: any) => {
  return axios
    .post(`${URL}/api/inventory/read/`, {
      uniqueId: id,
    })
    .then((res) => res)
    .catch((e) => console.log(e));
};

export const getAllProduct = async () => {
  return axios
    .post(`${URL}/api/inventory/read`)
    .then((res) => res)
    .catch((e) => console.log(e));
};
