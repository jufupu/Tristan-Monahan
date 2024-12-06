// components/Projects.tsx
const Projects = () => {
    const projects = [
        {
            title: 'AI-Powered Personal Assistant',
            description: 'Developed a personal assistant using React.js, Node.js, and OpenAI API, enabling users to interact with a chatbot for task automation and information retrieval.',
            link: 'https://github.com/yourusername/project1',
        },
        {
            title: 'Virtual Bookshelf',
            description: 'Created a virtual bookshelf using HTML5, CSS, PHP, and SQL for the backend, to store and record my favourite books. Allowing me to rate and review them.',
            link: 'https://github.com/jufupu/Tristan-Monahan/tree/main/my-book-case',
        },
        {
            title: 'Musical Theatre Script Learner',
            description: 'Created a Musical Theatre Script Learner application to aid in memorizing scripts and lyrics for performances. Technologies Used: C#, Windows Forms, SQLite, Basic Input Validation.',
            link: 'https://github.com/jufupu/Tristan-Monahan/tree/main/ScriptLearnerApp',
        },
        {
            title: 'Rebranding of Powerhouse fitness to Fitshop',
            description: 'Developed a new website for Fitshop using HTML5, CSS, JavaScript, and PHP, enhancing the user experience across both desktop and mobile platforms.',
            link: 'https://www.fitshop.co.uk/about-fitshop',
        },
    ];
    return (
        <>
            <section className="py-10 px-5 bg-dark-blue">
                <h2 className="text-3xl font-medium text-white">Projects</h2>
                <ul className="mt-4">
                    {projects.map((project, index) => (
                        <li key={index} className="mb-6 p-4 bg-gray-700 rounded-lg">
                            <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                            <p className="text-gray-200">{project.description}</p>
                            <a href={project.link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
                        </li>
                    ))}
                </ul>
            </section>
            <hr className="border-t border-gray-600 my-10" />
        </>
    );
};

export default Projects;