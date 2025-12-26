"use client";

import { useState } from "react";
import Navbar from "../componets/NavBar";

export default function ProfilePage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const submit = () => {
    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (mode === "signup" && password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    alert(`${mode === "login" ? "Logged in" : "Signed up"} as ${email}`);
  };

  return (
    <div>
        <Navbar/>
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_circle_at_30%_-10%,rgba(255,255,255,0.08),transparent_40%)]" />

        <div className="relative">
          <h1 className="text-2xl font-semibold text-white tracking-tight">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            {mode === "login"
              ? "Sign in to continue to Dresso"
              : "Sign up to start building outfits"}
          </p>

          <div className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 rounded-lg border border-zinc-700 bg-zinc-950/60 px-4 text-sm text-white placeholder-zinc-500 outline-none focus:border-zinc-500"
            />

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 rounded-lg border border-zinc-700 bg-zinc-950/60 px-4 pr-12 text-sm text-white placeholder-zinc-500 outline-none focus:border-zinc-500"
              />
              <button
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                {showPass ? "HIDE" : "SHOW"}
              </button>
            </div>

            {mode === "signup" && (
              <input
                type="password"
                placeholder="Confirm password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full h-11 rounded-lg border border-zinc-700 bg-zinc-950/60 px-4 text-sm text-white placeholder-zinc-500 outline-none focus:border-zinc-500"
              />
            )}

            {error && (
              <p className="text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              onClick={submit}
              className="mt-2 w-full h-11 rounded-lg bg-black text-sm font-semibold text-white transition-all hover:bg-zinc-900 hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-zinc-500/40"
            >
              {mode === "login" ? "Log in" : "Sign up"}
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-zinc-400">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-white hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-white hover:underline"
                >
                  Log in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
