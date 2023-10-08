import { api } from "./config";

export const createCollect = (name: string) => {
  return api.post("/collect", { name });
};

export const getAllCollects = () => {
  return api.get("/collect");
};
