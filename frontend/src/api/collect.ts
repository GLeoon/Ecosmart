import { api } from "./config";

export const createCollect = (name: string) => {
  return api.post("/collect", { name });
};

export const getAllCollects = () => {
  return api.get("/collect");
};

export const removeCollect = (id: number) => {
  return api.delete(`/collect/${id}`);
};

export const updateCollect = (id: number, data: any) => {
  return api.patch(`/collect/${id}`, data);
};
