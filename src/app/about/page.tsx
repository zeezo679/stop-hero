const users = [
    {
        name: "Zeyad",
        role: "Backend Developer",
        ImageURL: "https://media.licdn.com/dms/image/v2/D4D35AQF5Q2nouSifNg/profile-framedphoto-shrink_100_100/B4DZbpb06PIEAk-/0/1747673108477?e=1751738400&v=beta&t=gHtTyWz2Id4URft6uxp_xdmWNuyN7uEGFsjk8OCSEnA",
        DO: "Specializes in server architecture, database optimization, and API development. Implements secure authentication systems and cloud solutions.",
        skills: ["Node.js", "next.js", "MySQL", "react","Supabase"],
        id: 1,
    },
    {
        name: "Menna",
        role: "Frontend Developer",
        ImageURL: "",
        DO: "Creates responsive interfaces with React, implements design systems, and conducts user research. Focuses on performance and accessibility.",
        skills: ["React","CSS3","Tailwind CSS", "Next.js", "TypeScript",],
        id: 2,
    },
];

export default function About() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-between dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <section className="flex-grow w-full py-16 px-4 sm:px-8 flex justify-center items-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {users.map((item) => (
                        <div key={item.id} className="relative group h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                            {/* Content */}
                            <div className="p-8 flex flex-col items-center text-center">
                                {/* Avatar */}
                                <div className="relative mb-6">
                                    <img
                                        src={item.ImageURL || `https://ui-avatars.com/api/?name=${item.name.replace(" ", "+")}&background=6366f1&color=fff&size=128`}
                                        alt={item.name}
                                        className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
                                    />
                                    <div className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Name & Role */}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {item.name}
                                </h3>
                                <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                                    {item.role}
                                </p>

                                {/* Divider */}
                                <div className="w-20 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mb-6"></div>

                                {/* Skills */}
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {item.skills.map((skill, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 bg-purple-100 dark:bg-gray-700 text-purple-800 dark:text-purple-200 text-xs font-medium rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 to-pink-600/95 dark:from-gray-900/95 dark:to-gray-800/95 flex flex-col justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-center">
                                    <h4 className="text-xl font-bold text-white mb-4">What I Do</h4>
                                    <p className="text-white/90 leading-relaxed mb-6">
                                        {item.DO}
                                    </p>
                                    <div className="w-12 h-0.5 bg-white/30 mx-auto my-4"></div>
                                    <p className="text-sm text-white/80">
                                        Let`s work together
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}