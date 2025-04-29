// components/Projects.tsx
import Image from 'next/image';

const Projects = () => {
    const projects = [
        {
            title: 'Rebranding of Powerhouse fitness to Fitshop',
            description: 'Developed a new website for Fitshop using HTML5, CSS, JavaScript, and PHP, enhancing the user experience across both desktop and mobile platforms.',
            link: 'https://www.fitshop.co.uk/about-fitshop',
            thumbnail: '/img/fitshop_rebranding.png',
        },
        {
            title: 'Hackney Collective',
            description: 'A solo interior designer needed a client facing website she could drive traffic too. Designed on figma, Built with typescript, Both desktop and mobile optimised.',
            link: 'https://hackneycollective.co.uk/',
            thumbnail: '/img/hackney-collective-showcase.png',
        },
        {
            title: 'Lavender Contracts',
            description: 'A local cleaning company in scotland. Website built to drive traffic too. Designed on Figma. Built with Typescript. Both desktop and mobile optimised.',
            link: 'https://lavendercontracts.co.uk/',
            thumbnail: '/img/Lavender_Contracts_showcase.png',
        },
        {
            title: 'ShowFlow - A Musical Theatre Centralisation App',
            description: 'My current project, developing a cross-platform mobile application using React Native, TypeScript, and Expo to centralise and streamline theatre productions.',
            link: 'https://github.com/jufupu/Tristan-Monahan/tree/main/ShowFlow',
            thumbnail: '/img/showflow.png',
        },
        {
            title: 'BookNook - Virtual Bookshelf',
            description: 'Created a virtual bookshelf using HTML5, CSS, PHP, and SQL for the backend, to store and record my favourite books. Allowing me to rate and review them.',
            link: 'https://github.com/jufupu/Tristan-Monahan/tree/main/my-book-case',
            thumbnail: '/img/booknook.png',
        },
        
    ];
    return (
        <>
            <section className="py-10 px-5">
                <h2 className="text-3xl font-medium text-white">Projects</h2>
                <ul className="mt-4 grid grid-cols-1 gap-6">
                    {projects.map((project, index) => (
                        <li key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition duration-300">
                            <div className="flex flex-col md:flex-row">
                                <div className="p-4 md:w-2/3">
                                    <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                                    <p className="text-gray-200 mt-2">{project.description}</p>
                                    <a href={project.link} className="inline-block mt-3 text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                        View Project
                                    </a>
                                </div>
                                <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden flex items-center justify-center">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative w-4/5 h-4/5 transition-transform duration-300 transform hover:scale-105">
                                        <Image 
                                            src={project.thumbnail} 
                                            alt={project.title}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <hr className="border-t border-gray-600 my-10" />
        </>
    );
};

export default Projects;