"use client";

import { useEffect, useState, useRef } from 'react'
import { supabase } from '../lib/SupabaseClient';
import type { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

const LTS = [
    { id: "1", name: "Home", href: "/" },
    { id: "2", name: "About", href: "/about" },
    { id: "3", name: "Contact", href: "/contact" },
    { id: "4", name: "Content", href: "/Contennt" },
    { id: "5", name: "Live", href: "/live" },

];

// Lucide LogIn icon SVG
const LogInIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H9m0 0l3-3m-3 3l3 3" />
  </svg>
);

// User-plus icon SVG for Register
const UserPlusIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 11h6m-3-3v6" />
  </svg>
);

// Lucide LogOut icon SVG
const LogOutIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4" />
  </svg>
);

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [profileName, setProfileName] = useState<string>("");
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const getUserAndProfile = async () => {
            setLoading(true);
            const { data } = await supabase.auth.getUser();
            setUser(data?.user || null);
            if (data?.user) {
                // Fetch profile from 'profiles' table
                const { data: profile, error } = await supabase
                  .from('profiles')
                  .select('full_name')
                  .eq('id', data.user.id)
                  .single();
                if (profile && profile.full_name) {
                  setProfileName(profile.full_name);
                } else {
                  // fallback to auth metadata
                  setProfileName(data.user.user_metadata?.full_name || data.user.user_metadata?.name || data.user.email || "User");
                }
            } else {
                setProfileName("");
            }
            setLoading(false);
        };
        getUserAndProfile();
        // Listen for auth changes
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
            if (session?.user) {
                supabase
                  .from('profiles')
                  .select('full_name')
                  .eq('id', session.user.id)
                  .single()
                  .then(({ data: profile, error }) => {
                    if (profile && profile.full_name) {
                      setProfileName(profile.full_name);
                    } else {
                      setProfileName(session.user.user_metadata?.full_name || session.user.user_metadata?.name || session.user.email || "User");
                    }
                  });
            } else {
                setProfileName("");
            }
        });
        return () => {
            listener?.subscription.unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    // Helper to get Google profile picture
    const getProfilePic = () => {
        // Supabase stores Google avatar in user_metadata.avatar_url
        // If not present, use DiceBear fun-emoji as default
        return user?.user_metadata?.avatar_url || "https://api.dicebear.com/6.x/fun-emoji/png?seed=avatar";
    };

    // Helper to get user name
    const getUserName = () => {
        return profileName || user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email || "User";
    };

    if (loading) {
        return <header className="w-full px-6 py-4" style={{ background: "#101828" }}></header>;
    }

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
                        <a href={item.href} className="hover:text-purple-400 transition-colors duration-300">
                        {item.name}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-2 ml-4 relative">
              {!user ? (
                <>
                  <a href="/login" title="Sign in to your account" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition shadow-md focus:outline-none cursor-pointer">
                    <span className="hidden sm:inline">Sign In</span>
                    <LogInIcon className="w-6 h-6" />
                  </a>
                  <a href="/register" title="Create new account" className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#5f2eea] to-[#8257e5] text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer">
                    <span className="hidden sm:inline">Register</span>
                    <UserPlusIcon className="w-6 h-6" />
                  </a>
                </>
              ) : (
                <div className="relative">
                  <div
                    className="flex items-center focus:outline-none cursor-pointer bg-transparent border-none p-0 group"
                    aria-label="Account menu"
                  >
                    <span className="relative flex items-center">
                      <img
                        src={getProfilePic() || '/default-avatar.png'}
                        alt="Profile"
                        className="w-14 h-14 rounded-full border-2 border-purple-400 shadow cursor-pointer transition-transform duration-300 group-hover:-translate-x-10 group-hover:scale-105 group-hover:border-purple-600 group-hover:shadow-lg"
                        style={{ zIndex: 2 }}
                      />
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 ml-2 pl-3 pr-3 py-2 bg-[#23234b] text-white font-semibold rounded-full shadow-lg transition-all duration-300 opacity-0 -translate-x-12 group-hover:opacity-100 group-hover:translate-x-10 pointer-events-none select-none border border-purple-400 whitespace-nowrap"
                        style={{ zIndex: 1 }}
                        title={getUserName()}
                      >
                        {getUserName()}
                      </span>
                    </span>
                  </div>
                </div>
              )}
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
            {/* Auth Buttons for mobile */}
            <div className="flex gap-2 mt-2">
              {!user ? (
                <>
                  <a href="/login" title="Sign in to your account" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition shadow-md cursor-pointer">
                    <span>Sign In</span>
                    <LogInIcon className="w-6 h-6" />
                  </a>
                  <a href="/register" title="Create new account" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#5f2eea] to-[#8257e5] text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer">
                    <span>Register</span>
                    <UserPlusIcon className="w-6 h-6" />
                  </a>
                </>
              ) : (
                <div className="relative w-full flex-1 flex items-center justify-center group">
                  <div
                    className="flex items-center focus:outline-none cursor-pointer bg-transparent border-none p-0"
                    aria-label="Account menu"
                  >
                    <span className="relative flex items-center">
                      <img
                        src={getProfilePic() || '/default-avatar.png'}
                        alt="Profile"
                        className="w-14 h-14 rounded-full border-2 border-purple-400 shadow cursor-pointer transition-transform duration-300 group-hover:-translate-x-10 group-hover:scale-105 group-hover:border-purple-600 group-hover:shadow-lg"
                        style={{ zIndex: 2 }}
                      />
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 ml-2 pl-3 pr-3 py-2 bg-[#23234b] text-white font-semibold rounded-full shadow-lg transition-all duration-300 opacity-0 -translate-x-12 group-hover:opacity-100 group-hover:translate-x-10 pointer-events-none select-none border border-purple-400 whitespace-nowrap"
                        style={{ zIndex: 1 }}
                        title={getUserName()}
                      >
                        {getUserName()}
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>
            </div>
        )}
        </header>
    );
}

// Add to the bottom of the file (if using Tailwind, add to globals.css instead):
// @layer utilities {
//   .animate-dropdown-in {
//     animation: dropdown-in 0.2s cubic-bezier(0.4,0,0.2,1);
//   }
//   @keyframes dropdown-in {
//     0% { opacity: 0; transform: scaleY(0.8) translateY(-10px); }
//     100% { opacity: 1; transform: scaleY(1) translateY(0); }
//   }
// }