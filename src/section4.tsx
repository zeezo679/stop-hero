const content = [
    { title: "Frontend", id: 1 ,description:"Master HTML, CSS, JavaScript and modern frameworks"},
    { title: "BackEnd", id: 2 ,description:"Learn server-side development with Node.js, Python and more"},
    { title: "FullStack", id: 3 ,description:"Become a complete developer from front to back"},
];

export default function Section4() {
    return (
        <div className="w-full bg-gray-100 dark:bg-gray-900 py-16 px-6 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="p-8 text-center border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Tracks We Have
                        </h2>
                    </div>
                    
                    <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content.map(item => (
                            <div 
                                key={item.id} 
                                className="
                                    bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-700 dark:to-gray-600
                                    p-8 rounded-lg 
                                    shadow-md hover:shadow-xl 
                                    transition-all duration-300
                                    text-center
                                    group
                                "
                            >
                                <h3 className="
                                    text-2xl font-bold 
                                    text-purple-600 dark:text-purple-400
                                    mb-4
                                    group-hover:text-purple-700 dark:group-hover:text-purple-300
                                    transition-colors duration-300
                                ">
                                    {item.title}
                                </h3>
                                <div className="w-16 h-1 bg-purple-500 mx-auto mb-6 rounded-full"></div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}