import axios from "axios";

const instance = axios.create({
  baseURL: "https://myburger-71646.firebaseio.com/"
});

export default instance;
