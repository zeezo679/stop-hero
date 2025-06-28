"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
    <g>
      <path
        fill="#4285F4"
        d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.87-6.87C35.64 2.7 30.23 0 24 0 14.82 0 6.73 5.82 2.69 14.09l8.01 6.22C12.36 13.13 17.68 9.5 24 9.5z"
      />
      <path
        fill="#34A853"
        d="M46.1 24.5c0-1.64-.15-3.22-.43-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.01l7.19 5.6C43.98 37.13 46.1 31.3 46.1 24.5z"
      />
      <path
        fill="#FBBC05"
        d="M10.7 28.31c-.5-1.48-.78-3.06-.78-4.81s.28-3.33.78-4.81l-8.01-6.22C1.01 15.7 0 19.71 0 24s1.01 8.3 2.69 11.53l8.01-6.22z"
      />
      <path
        fill="#EA4335"
        d="M24 48c6.23 0 11.64-2.06 15.53-5.6l-7.19-5.6c-2.01 1.35-4.59 2.15-8.34 2.15-6.32 0-11.64-3.63-13.3-8.81l-8.01 6.22C6.73 42.18 14.82 48 24 48z"
      />
      <path fill="none" d="M0 0h48v48H0z" />
    </g>
  </svg>
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  // Validation logic
  const validateEmail = (value: string) => {
    if (!value) return "Email is required.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value))
      return "Please enter a valid email address.";
    return "";
  };
  const validatePassword = (value: string) => {
    if (!value) return "Password is required.";
    if (value.length < 6) return "Password must be at least 6 characters.";
    return "";
  };

  // Real-time validation on blur
  const handleBlur = (field: "email" | "password") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === "email") setEmailError(validateEmail(email));
    if (field === "password") setPasswordError(validatePassword(password));
  };

  // On input change, clear error if valid
  const handleChange = (field: "email" | "password", value: string) => {
    if (field === "email") {
      setEmail(value);
      if (touched.email) setEmailError(validateEmail(value));
    }
    if (field === "password") {
      setPassword(value);
      if (touched.password) setPasswordError(validatePassword(value));
    }
  };

  // On submit, validate all
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    const emailErr = validateEmail(email);
    const passErr = validatePassword(password);
    setEmailError(emailErr);
    setPasswordError(passErr);
    if (emailErr || passErr) return;
    // ...sign in logic...
  };

  return (
    <div
      className="relative min-h-screen w-full bg-[#181c2b] overflow-hidden flex items-center justify-center"
      style={{ background: "#101828" }}
    >
      {/* Top right signup link */}
      <Link
        href="/register"
        className="absolute top-8 right-10 text-slate-200 text-sm opacity-80 hover:opacity-100 flex items-center gap-1 z-20"
      >
        Signup <span className="ml-1">→</span>
      </Link>
      {/* Main card */}
      <div className="flex flex-1 items-center justify-center z-10 relative min-h-[calc(100vh-0px)]">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              Here you can Login
            </h2>
            <p className="text-slate-300 text-sm">Let's join us :)</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            noValidate
          >
            <div>
              <label
                htmlFor="email"
                className="block text-slate-200 mb-1 font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                aria-invalid={!!emailError}
                aria-describedby="email-error"
                className={`w-full px-4 py-2 rounded-md bg-[#23263a] text-white placeholder-white/60 border border-[#23263a] focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition shadow-sm focus:outline-none ${
                  emailError
                    ? "border-red-500 focus:ring-red-500 animate-shake"
                    : ""
                }`}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                required
              />
              {emailError && (
                <div
                  id="email-error"
                  className="text-red-500 text-xs mt-1 animate-fade-in"
                  role="alert"
                >
                  {emailError}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-slate-200 mb-1 font-medium"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                aria-invalid={!!passwordError}
                aria-describedby="password-error"
                className={`w-full px-4 py-2 rounded-md bg-[#23263a] text-white placeholder-white/60 border border-[#23263a] focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition shadow-sm focus:outline-none ${
                  passwordError
                    ? "border-red-500 focus:ring-red-500 animate-shake"
                    : ""
                }`}
                placeholder="••••••••"
                value={password}
                onChange={(e) => handleChange("password", e.target.value)}
                onBlur={() => handleBlur("password")}
                required
              />
              {passwordError && (
                <div
                  id="password-error"
                  className="text-red-500 text-xs mt-1 animate-fade-in"
                  role="alert"
                >
                  {passwordError}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-2 rounded-md bg-gradient-to-r from-[#5f2eea] to-[#8257e5] text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
              disabled={!!emailError || !!passwordError}
            >
              LOGIN
            </button>
            <div className="flex justify-between items-center mt-2">
              <Link
                href="#"
                className="text-slate-400 hover:underline text-xs"
              >
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>
        {/* Bottom wave */}
        <div className="fixed bottom-0 left-0 w-screen z-0 pointer-events-none select-none">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-24 md:h-32 min-w-[1440px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#23234a"
              fillOpacity="0.7"
              d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z"
            />
            <path
              fill="#23234a"
              fillOpacity="0.5"
              d="M0,100 C400,180 1040,20 1440,100 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
