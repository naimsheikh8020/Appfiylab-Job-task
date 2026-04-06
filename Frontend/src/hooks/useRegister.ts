import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../api/auth.api";
import { useNavigate } from "react-router";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerApi,

    onSuccess: () => {
      navigate("/login", { replace: true });
    },

    onError: (err: any) => {
      alert(err?.response?.data?.message || "Registration failed");
    },
  });
};