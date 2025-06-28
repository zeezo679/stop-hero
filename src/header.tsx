import { useState } from "react";
import Link from "next/link";

const LTS = [
    { id: "1", name: "Home", href: "/" },
    { id: "2", name: "About", href: "/about" },
    { id: "3", name: "Contact", href: "/contact" }
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="w-full bg-white text-white px-6 py-4 shadow-md z-50 transition-colors duration-300" style={{ background: "#101828" }}>
        <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            StopHero
            </h1>

            {/* Desktop Nav */}
            <nav className="hidden md:flex">
                <ul className="flex space-x-6 text-sm sm:text-base font-medium">
                {LTS.map(item => (
                    <li key={item.id}>
                        <Link href={item.href}>
                        <span className="hover:text-purple-400 transition-colors duration-300">
                            {item.name}
                        </span>
                        </Link>
                    </li>
                ))}

                </ul>
            </nav>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-2 ml-4">
              <a href="/login" title="Sign in to your account" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition shadow-md focus:outline-none">
                <span className="hidden sm:inline">Sign In</span>
                <LogInIcon className="w-6 h-6" />
              </a>
              <a href="/register" title="Create new account" className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#5f2eea] to-[#8257e5] text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-400">
                <span className="hidden sm:inline">Register</span>
                <UserPlusIcon className="w-6 h-6" />
              </a>
            </div>

            {/* Hamburger Button */}
            <button title="Menu" type="button" onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none ml-2">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                </svg>
            </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 rounded-b-xl shadow-lg animate-fade-in">
            {LTS.map(item => (
                <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-purple-400 transition-colors duration-300"
                >
                {item.name}
                </a>
            ))}
            </div>
        )}
        </header>
    );
}
