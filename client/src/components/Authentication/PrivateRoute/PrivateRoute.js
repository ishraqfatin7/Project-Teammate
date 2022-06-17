import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (!user) return <Navigate to="/signin" state={{ from: location }} />;

  // if (loading) return <h1>Loading </h1>;

  return <>{children}</>;
}
