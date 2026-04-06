import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router";

export const useLogout = () => {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear frontend state
    logout();

    // redirect
    navigate("/login", { replace: true });
  };

  return { handleLogout };
};