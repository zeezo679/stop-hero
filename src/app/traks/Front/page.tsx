import Link from "next/link";

export default function Front() {
    const technologies = [
        {
        id: 1,
        name: "HTML5",
        icon: "fab fa-html5 text-orange-500",
        description: "The backbone of all web pages"
        path: "/html"
        },
        {
        id: 2,
        name: "CSS3",
        icon: "fab fa-css3-alt text-blue-500",
        description: "Styling for beautiful web pages",
        path: "/css"
        },
        {
        id: 3,
        name: "JavaScript",
        icon: "fab fa-js text-yellow-400",
        description: "Make your websites interactive",
        path: "/javascript"
        },
        {
        id: 4,
        name: "Bootstrap",
        icon: "fab fa-bootstrap text-purple-500",
        description: "Popular CSS framework",
        path: "/bootstrap"
        },
        {
        id: 5,
        name: "Tailwind CSS",
        icon: "fas fa-wind text-teal-400",
        description: "Utility-first CSS framework",
        path: "/tailwind"
        },
        {
        id: 6,
        name: "React",
        icon: "fab fa-react text-blue-400",
        description: "JavaScript library for building UIs",
        path: "/react"
        }
    ];

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Front-End Development Roadmap</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
            Follow this step-by-step guide to master front-end technologies. 
            Start with the basics and progress to advanced frameworks.
        </p>

        <div className="flex flex-col items-center space-y-4 w-full max-w-md">
            {technologies.map((tech, index) => (
            <div key={tech.id} className="w-full flex flex-col items-center">
                {/* Technology Card */}
                <Link 
                href={tech.path} 
                className="bg-white shadow-md rounded-lg p-6 w-full flex flex-col items-center 
                            hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1
                            group cursor-pointer border-l-4 border-blue-500"
                >
                <div className="flex items-center w-full">
                    <div className="flex-shrink-0">
                    <i className={`${tech.icon} text-4xl mb-2`}></i>
                    </div>
                    <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-800">{tech.name}</h2>
                    <p className="text-gray-600">{tech.description}</p>
                    </div>
                </div>
                <div className="mt-2 text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to learn more →
                </div>
                </Link>

                {/* Progress Connector (except for last item) */}
                {index < technologies.length - 1 && (
                <div className="h-8 w-1 bg-gray-300 rounded-full relative">
                    <div className="absolute top-0 left-0 w-full h-0 bg-blue-500 animate-progress"></div>
                </div>
                )}
            </div>
            ))}
        </div>

        {/* Progress Tracker */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md w-full max-w-md">
  <h3 className="font-medium text-gray-800 mb-4">Your Progress</h3>
  
  <div className="flex items-center justify-between relative">
    {technologies.map((tech, index) => (
      <div key={`progress-${tech.id}`} className="flex flex-col items-center flex-1 relative">
        {/* الخط قبل النقطة */}
        {index !== 0 && (
          <div
            className={`absolute top-1.5 left-0 w-full h-1 z-0 ${
              index <= 2 ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
        )}

        {/* النقطة */}
        <div className="relative z-10 flex flex-col items-center">
          <div
            className={`w-4 h-4 rounded-full border-2 ${
              index <= 1 ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'
            }`}
          ></div>
          {index === 0 && <span className="text-xs mt-1">Start</span>}
          {index === technologies.length - 1 && <span className="text-xs mt-1">End</span>}
        </div>
      </div>
    ))}
  </div>

  <p className="mt-4 text-sm text-gray-600 text-center">2/{technologies.length} steps completed</p>
</div>

        </div>
    );
}