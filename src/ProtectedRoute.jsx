import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";

function ProtectedRoute({ children }) {
  const { authentication } = useContext(AuthContext);
  if (authentication == null) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
