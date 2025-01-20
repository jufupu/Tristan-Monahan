// components/Experience.tsx
const Experience = () => {
    const experiences = [
        {
            title: 'Junior Web Developer',
            company: 'Forth Valley College',
            duration: 'Nov 2024 - present',
            description: 'Spearheading the development of a cross-platform project as part of the Skills Transition Centre (STC) initiative.',
        },
        {
            title: 'Front End Web Developer',
            company: 'Fitshop',
            duration: 'Jan 23 - Sep 24',
            description: 'Developed new dynamic web pages using HTML5, CSS, JavaScript, and PHP, enhancing the user experience across both desktop and mobile platforms.',
        },
        {
            title: 'Junior IT Developer',
            company: 'Memoria',
            duration: 'Jan 23 - Sep 24',
            description: 'Enhanced and customized a CRM system for a parent funeral services provider, resulting in improved customer relationship management.',
        },
    ];

    return (
        <>
            <section className="py-10 px-5">
                <h2 className="text-3xl font-medium text-white">Experience</h2>
                <ul className="mt-4">
                    {experiences.map((exp, index) => (
                        <li key={index} className="mb-6 p-4 bg-gray-800 rounded-lg">
                            <h3 className="font-semibold text-lg text-white">{exp.title}</h3>
                            <p className="text-gray-300">{exp.company} | {exp.duration}</p>
                            <p className="mt-2 text-gray-200">{exp.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <hr className="border-t border-gray-600 my-10" /> {/* Horizontal line */}
        </>
    );
};

export default Experience;