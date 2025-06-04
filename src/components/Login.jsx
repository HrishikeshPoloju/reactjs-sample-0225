import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D3D7B] relative text-white">
      <div className="w-full max-w-md px-8 py-10 bg-transparent">
        <h2 className="text-3xl font-bold text-center mb-10">Log in!</h2>

        {error && <div className="text-red-400 text-center mb-4">{error}</div>}

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="text-sm block mb-1 ml-1">Email Address</label>
            <input
              type="email"
              placeholder="abcd@gmail.com"
              className="w-full px-4 py-2 border border-white text-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm block mb-1 ml-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border border-white text-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#0D3D7B] font-semibold py-2 hover:bg-gray-100 transition"
          >
            Log in
          </button>
        </form>

        <p className="text-white mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="underline hover:text-blue-300">Sign up</Link>
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <img src="/your-logo-path.png" alt="Background Logo" className="max-w-md" />
      </div>
    </div>
  );
}
