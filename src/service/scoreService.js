import Axios from "axios";
import { SCORE_SERVICE } from "../config/constants";

export const submitScore = async (username, score) => {
  return fetch(SCORE_SERVICE, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Oirgin": "*",
      Accept: "application/json",
    },
    body: JSON.stringify({ username: username, score: score }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getScore = async (username, score) => {
  return fetch(SCORE_SERVICE)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
