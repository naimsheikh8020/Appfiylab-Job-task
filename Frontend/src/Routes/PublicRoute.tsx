import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../store/auth.store";

const PublicRoute = () => {
  const token = useAuthStore((state) => state.accessToken);

  // ✅ already logged in → redirect to feed
  if (token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;