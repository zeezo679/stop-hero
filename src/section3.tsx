// Example of a StatCard component
import React from "react";
const StatCard = ({ icon, number, label }) => (
    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">{number}</div>
      <div className="text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
  
  // Example of responsive grid for features
export default function Section3(){
    return(
        <div className="w-full bg-gray-100 ">
            <section className="p-8 sm:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center shadow-md rounded-xl">
            <StatCard icon="👨‍💻" number="10,000+" label="Active Learners" />
            <StatCard icon="📚" number="150+" label="Courses" />
            <StatCard icon="🏆" number="95%" label="Success Rate" />
            </section>
        </div>
    );
}