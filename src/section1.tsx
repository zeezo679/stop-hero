export default function Section1() {
    
return (
    <div className="w-full bg-gray-100 dark:bg-gray-900">
        <section className="bg-gray-100 dark:bg-gray-900 p-8 sm:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center shadow-md rounded-xl ">
        <div className="flex flex-col justify-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold  mb-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Stop Hero
            <br />
        </h2>
        <span className="text-dark font-bold text-3xl mt-2 font-serif">Your Coding Journey Starts Here</span>
        <p className="text-gray-400 text-lg md:text-xl font-medium dark:text-gray-300 max-w-2xl mt-5 ">
        Master programming from the ground up with our comprehensive learning platform designed to
        <span>beginners</span>

        </p>
        <div className="flex flex-wrap gap-4 mt-6">
            <button type="button" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                Get Started
            </button>
            <button type="button" className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
                Learn More
            </button>
        </div>
    </div>
        <div className="bg-gray-800 rounded-lg p-6 font-mono text-sm">
            <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-purple-400">
                <code>
                    {`// Learn by doing\nfunction welcome() {\n  console.log("Hello Developer!");\n}`}
                </code>
            </pre>
            <small className="text-gray-500 mt-2 font-mono text-xs ">
                {`//output: Hello Developer!
`}
            </small>
        </div>
    </section>
    </div>
    );
}