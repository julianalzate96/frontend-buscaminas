import Axios from "axios";
import { SCORE_SERVICE } from "../config/constants";

export const submitScore = async (username, score) => {
  return Axios.post(SCORE_SERVICE, { username, score })
    .then((res) => res)
    .catch((err) => console.log(err));
};
