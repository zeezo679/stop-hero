"use client"
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
        <header className="bg-gray-900 text-white px-6 py-4 w-full shadow-md  z-50">
        <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            Stop Hero
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

            {/* Hamburger Button */}
            <button title="Hamburger Button" type="button" onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                </svg>
            </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
            {LTS.map(item => (
                    <li key={item.id}>
                        <Link href={item.href}>
                        <span className="hover:text-purple-400 transition-colors duration-300">
                            {item.name}
                        </span>
                        </Link>
                    </li>
                ))}
            </div>
        )}
        </header>
    );
}
