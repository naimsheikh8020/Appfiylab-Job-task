import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";
import axios from "axios";

export const useAuthInit = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const setReady = useAuthStore((s) => s.setReady);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/refresh",
          {},
          { withCredentials: true }
        );

        setAuth({
          user: res.data.user,
          accessToken: res.data.accessToken,
        });
      } catch {
        // silent fail
      } finally {
        setReady();
      }
    };

    init();
  }, []);
};