const WhyLearning = [
    {
        id: 1,
        title: "In-Demand Skill",
        description: "Programming is one of the most sought-after skills in today's job market, with growing demand across all industries.",
        icon: "💼",
        color: "from-blue-500 to-blue-600"
    },
    {
        id: 2,
        title: "Enhance Problem Solving",
        description: "Learning to code helps you improve your logical thinking and problem-solving abilities.",
        icon: "🧠",
        color: "from-purple-500 to-purple-600"
    },
    {
        id: 3,
        title: "Start Your Own Project",
        description: "With programming, you can build your own websites and apps, turning your ideas into real-world solutions.",
        icon: "🚀",
        color: "from-pink-500 to-pink-600"
    },
    {
        id: 4,
        title: "Interactive Learning",
        description: "StopHero offers practical challenges, real projects, and a fun way to learn programming from scratch.",
        icon: "🎯",
        color: "from-orange-500 to-orange-600"
    }
];

function status(){
    return(
        <div className='mt-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-8 text-center text-white'>
                    <div className='max-w-4xl mx-auto'>
                        <h3 className='text-2xl font-bold mb-6'>Join Our Thriving Community</h3>
                        <div className='grid grid-cols-3 gap-4'>
                            <div>
                                <div className='text-3xl font-bold'>10K+</div>
                                <div className='text-sm opacity-90'>Active Learners</div>
                            </div>
                            <div>
                                <div className='text-3xl font-bold'>95%</div>
                                <div className='text-sm opacity-90'>Success Rate</div>
                            </div>
                            <div>
                                <div className='text-3xl font-bold'>150+</div>
                                <div className='text-sm opacity-90'>Courses & Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default function Section2(){
    return(
        <div className='w-full bg-gray-50 dark:bg-gray-900 py-16 sm:py-24 px-6 sm:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                        Why Learn With <span className='bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'>StopHero?</span>
                    </h2>
                    <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
                        Discover the perfect way to start your programming journey with our unique approach
                    </p>
                </div>
                
                {/* Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {WhyLearning.map(item =>(
                        <div 
                            key={item.id} 
                            className='
                                bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 
                                transform hover:-translate-y-2
                                border border-gray-100 dark:border-gray-700
                                group
                            '
                        >
                            <div className={`
                                w-16 h-16 mb-6 rounded-lg 
                                bg-gradient-to-r ${item.color}
                                flex items-center justify-center
                                text-white text-2xl
                                group-hover:scale-110 transition-transform duration-300
                            `}>
                                {item.icon}
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                                {item.title}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                {status()}
            </div>
        </div>
    )
}