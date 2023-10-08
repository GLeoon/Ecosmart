import axios from "axios";

const createAxiosInstance = () => {
  const axiosCreate = axios.create({
    baseURL: "http://localhost:3002",
    withCredentials: true,
    headers: {
      "content-type": "application/json",
    },
  });

  return axiosCreate;
};

export const api = createAxiosInstance();
