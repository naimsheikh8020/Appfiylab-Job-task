import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/auth.api";
import { useAuthStore } from "../store/auth.store";
import { useNavigate, useLocation } from "react-router";

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  const navigate = useNavigate();
  const location = useLocation();

  return useMutation({
    mutationFn: loginApi,

    onSuccess: (data) => {
      // ✅ store auth
      setAuth({
        user: data.user,
        accessToken: data.accessToken,
      });

      // ✅ redirect logic
      const from = location.state?.from?.pathname || "/";

      navigate(from, { replace: true });
    },

    onError: (err: any) => {
      alert(err?.response?.data?.message || "Login failed");
    },
  });
};