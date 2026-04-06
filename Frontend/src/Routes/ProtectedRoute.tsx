import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../store/auth.store";

const ProtectedRoute = () => {
  const token = useAuthStore((state) => state.accessToken);
  const isReady = useAuthStore((state) => state.isAuthReady);

  const location = useLocation();

  // ⏳ wait for auth init (important for refresh token flow)
  if (!isReady) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  // ❌ not logged in → go to login
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ logged in
  return <Outlet />;
};

export default ProtectedRoute;