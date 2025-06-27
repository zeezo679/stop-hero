import React from "react";
import Link from "next/link";

// Lucide LogIn icon SVG
const LogInIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H9m0 0l3-3m-3 3l3 3" />
  </svg>
);

const Navbar = () => (
  <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent z-10 relative">
    <Link href="/" className="text-2xl font-bold text-white tracking-tight">StopHero</Link>
    <div className="flex items-center gap-4 ml-auto">
      <Link href="/login" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition shadow-md">
        <span className="hidden sm:inline">Sign In</span>
        <LogInIcon className="w-6 h-6" />
      </Link>
      <Link href="/register" className="px-4 py-2 rounded-md bg-gradient-to-r from-[#5f2eea] to-[#8257e5] text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-400">
        Register
      </Link>
    </div>
  </nav>
);

export default Navbar;
