// components/Skills.tsx
const Skills = () => {
    const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

    return (
        <>
            <section className="py-10 px-5 bg-dark-blue">
                <h2 className="text-3xl font-medium text-white">Skills</h2>
                <ul className="mt-4 grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <li key={index} className="bg-gray-700 text-center text-white p-4 rounded-lg hover:bg-gray-600 transition duration-300">
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