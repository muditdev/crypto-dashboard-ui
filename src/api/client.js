import axios from "axios";
const client = axios.create({
  baseURL: "https://api.pro.coinbase.com/",
});

export { client };
