import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      setError("Please accept the terms & conditions.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username });
      setError("");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Signup failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D3D7B] relative text-white">
      <div className="w-full max-w-md px-8 py-10 bg-transparent">
        <h2 className="text-3xl font-bold text-center mb-10">Sign up</h2>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label className="text-sm block mb-1 ml-1">Username</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-4 py-2 border border-white text-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

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

          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />
            <label>I accept the terms & conditions</label>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#0D3D7B] font-semibold py-2 hover:bg-gray-100 transition"
          >
            Sign up
          </button>
        </form>

        <p className="text-white mt-4 text-center">
          Already have an account?{" "}
          <Link to="/" className="underline hover:text-blue-300">Log in</Link>
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <img src="/your-logo-path.png" alt="Background Logo" className="max-w-md" />
      </div>
    </div>
  );
}
