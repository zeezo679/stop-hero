import Link from "next/link";

const tracks = [
    { id: 1, name: "FrontEnd", color: "from-blue-100 to-blue-50", icon: "fas fa-code text-blue-500", },
    { id: 2, name: "BackEnd", color: "from-green-100 to-green-50", icon: "fas fa-server text-green-500",  },
    { id: 3, name: "FullStack", color: "from-purple-100 to-pink-100", icon: "fas fa-layer-group text-purple-500", }
];

const courses = [
    { 
        id: 1, 
        name: "HTML", 
        description: "Master HTML fundamentals", 
        track: "FrontEnd",
        icon: "fab fa-html5 text-orange-500" 
    },
    { 
        id: 2, 
        name: "CSS", 
        description: "Style beautiful websites", 
        track: "FrontEnd",
        icon: "fab fa-css3-alt text-blue-500" 
    },
    { 
        id: 3, 
        name: "JavaScript", 
        description: "Add interactivity to your sites", 
        track: "FrontEnd",
        icon: "fab fa-js-square text-yellow-400" 
    },
    { 
        id: 4, 
        name: "React", 
        description: "Build modern UIs", 
        track: "FrontEnd",
        icon: "fab fa-react text-blue-400" 
    },
    { 
        id: 5, 
        name: "Node.js", 
        description: "Server-side JavaScript", 
        track: "BackEnd",
        icon: "fab fa-node-js text-green-500" 
    },
    { 
        id: 6, 
        name: "Python", 
        description: "Versatile programming language", 
        track: "BackEnd",
        icon: "fab fa-python text-blue-600" 
    },
    { 
        id: 7, 
        name: "Next.js", 
        description: "React framework for production", 
        track: "FullStack",
        icon: "fas fa-arrow-right text-gray-700" 
    },
    { 
        id: 8, 
        name: "Tailwind CSS", 
        description: "Utility-first CSS framework", 
        track: "FrontEnd",
        icon: "fas fa-wind text-blue-300" 
    },
    { 
        id: 9, 
        name: "TypeScript", 
        description: "Typed JavaScript superset", 
        track: "FrontEnd",
        icon: "fas fa-code text-blue-600" 
    },
    { 
        id: 10, 
        name: "C#", 
        description: "Microsoft's versatile language", 
        track: "BackEnd",
        icon: "fab fa-microsoft text-blue-500" 
    },
    { 
        id: 11, 
        name: "Java", 
        description: "Enterprise-grade language", 
        track: "BackEnd",
        icon: "fab fa-java text-red-500" 
    },
    { 
        id: 12, 
        name: "PHP", 
        description: "Server-side scripting", 
        track: "BackEnd",
        icon: "fab fa-php text-purple-500" 
    }
];
export default function Content() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-16 pb-10">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <section className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Explore Our Learning Paths</h1>
            <p className="text-lg max-w-2xl mx-auto">
                Start your journey to becoming a professional developer with our structured courses
            </p>
            </section>

            {/* Tracks Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-center">Available Tracks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {tracks.map(track => (
                    <Link 
                        href={`/tracks/${track.name.toLowerCase()}`} 
                        key={track.id}
                        className={`group rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${track.color}`}
                    >
                        <div className="p-6 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 h-full">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            <i className={`${track.icon} text-3xl mb-3 mr-4`}></i>
                            {track.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {courses.filter(c => c.track === track.name).length} courses available
                        </p>
                        </div>
                    </Link>
                    ))}
                </div>
            </section>

            {/* Courses Section */}
            <section className="mb-16">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                    <h2 className="text-3xl font-semibold mb-4 sm:mb-0">Available Courses</h2>
                    <div className="relative w-full sm:w-64">
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map(course => (
                    <Link 
                        href={`/courses/${course.name.toLowerCase()}`} 
                        key={course.id}
                        className="group rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                    >
                        <div className="bg-white dark:bg-gray-800 p-6">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            <i className={`${course.icon} text-3xl mb-3 mr-4`}></i>
                            {course.name}
                            </h3>
                            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                            {course.track}
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
                        <div className="text-sm text-purple-600 dark:text-purple-400 group-hover:underline">
                            Start Learning →
                        </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </section>
        </main>
        </div>
    );
}