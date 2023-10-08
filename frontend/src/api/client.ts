import { api } from "./config";

type ClientType = {
  id: number;
  name: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export const createClient = (name: string) => {
  return api.post("/client", { name });
};

export const getAllClients = () => {
  return api.get("/client");
};

export const removeClient = () => {
  return api.delete("/client");
};
