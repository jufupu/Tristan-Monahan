// components/Skills.tsx
const Skills = () => {
    const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'PHP', 'SQL', 'Next.js','React Native', 'Angular'];

    return (
        <>
            <section className="py-10 px-5">
                <h2 className="text-3xl font-medium text-white">Skills</h2>
                <ul className="mt-4 grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <li 
                            key={index} 
                            className={`text-center text-white p-4 rounded-lg transition duration-300 
                                ${index === 0 ? 'bg-gray-800 hover:bg-yellow-500' : ''} 
                                ${index === 1 ? 'bg-gray-800 hover:bg-blue-500' : ''} 
                                ${index === 2 ? 'bg-gray-800 hover:bg-green-500' : ''} 
                                ${index === 3 ? 'bg-gray-800 hover:bg-blue-600' : ''} 
                                ${index === 4 ? 'bg-gray-800 hover:bg-orange-500' : ''} 
                                ${index === 5 ? 'bg-gray-800 hover:bg-purple-500' : ''} 
                                ${index === 6 ? 'bg-gray-800 hover:bg-indigo-500' : ''} 
                                ${index === 7 ? 'bg-gray-800 hover:bg-teal-500' : ''} 
                                ${index === 8 ? 'bg-gray-800 hover:bg-blue-500' : ''}
                                ${index === 9 ? 'bg-gray-800 hover:bg-red-500' : ''}`}
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </section>
            <hr className="border-t border-gray-600 my-10" /> {/* Horizontal line */}
        </>
    );
};

export default Skills;