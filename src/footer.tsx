const FTS = [
    { id: "1", name: "Privacy Policy", href: "/privacy" },
    { id: "2", name: "Terms of Service", href: "/terms" },
    { id: "3", name: "Contact Us", href: "/contact" }
];
export default function Footer() {
    return(
        <footer className="bg-gray-900 text-white px-6 py-4 w-full shadow-md  bottom-0 left-0 z-50">
            <h1 className="text-center text-sm sm:text-base font-medium">
                &copy; {new Date().getFullYear()} <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Stop Hero</span> . All rights reserved.
            </h1>
            <nav className="text-center mt-2">
                <ul className="flex justify-center space-x-4 text-sm sm:text-base font-medium"> 
                    {FTS.map(item =>(
                        <li key={item.id}>
                        <a href={item.href} className="hover:text-purple-400 transition-colors duration-300">
                        {item.name}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>

        </footer>
    );
}