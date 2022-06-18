import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useAuth();

  return user? <Outlet /> : <Navigate to="/signin" state={{ from: location }} />;

  // if (loading) return <h1>Loading </h1>;
}
