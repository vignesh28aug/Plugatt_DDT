import axios from "axios";
import apiinstance from "./apiinstance";

export const getMethod = async (url, header, body) => {
  apiinstance.defaults.headers.common["X-Api-Key"] = header;
  return await apiinstance.get(url, body);
};

export const postMethod = async (url, header, body) => {
  apiinstance.defaults.headers.common["X-Api-Key"] = header;
  return await apiinstance.post(url, body);
};

export const DeleteMethod = async (url, header) => {
  apiinstance.defaults.headers.common["X-Api-Key"] = header;
  return await apiinstance.delete(url);
};
export const patchMethod = async (url, header, body) => {
  apiinstance.defaults.headers.common["X-Api-Key"] = header;
  return await apiinstance.patch(url, body);
};
