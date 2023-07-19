import axios from "axios";

const instance = axios.create({
  baseURL: "https://cheap-used-market.store/api",
});

export default instance;
