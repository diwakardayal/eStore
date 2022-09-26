import axios from "axios";
import { URL } from "../endpoint";

export const getUUDI = async () => {
  return axios
    .get(`${URL}/api/uuid/getuuid`)
    .then((res) => res)
    .catch((e) => console.log(e));
};
