import { client } from "./client";

export const getCurrencies = () =>
  client.get(`/currencies`).then((response) => response.data);
export const getCurrency = (id) =>
  client.get(`/currencies/${id}`).then((response) => response.data);
