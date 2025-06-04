import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  if (loading) return <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <p className="text-2xl font-semibold text-blue-600 animate-pulse">
    Loading...
  </p>
</div>
;
  return user ? children : <Navigate to="/" />;
}
