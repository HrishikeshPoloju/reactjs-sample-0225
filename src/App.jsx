import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
     <div className="min-h-screen w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
     </div>
  );
}

export default App;



     
   