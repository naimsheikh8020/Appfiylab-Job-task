import api from "./axios";

export const loginApi = async (data: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const refreshApi = async () => {
  const res = await api.post("/auth/refresh");
  return res.data;
};

export const registerApi = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};