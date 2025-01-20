// components/Education.tsx
const Education = () => {
    const education = [
        {
            degree: 'BSc (Hons) Web and Mobile Development',
            institution: 'University of the West of Scotland',
            year: '2022',
        },
    ];

    return (
        <>
            <section className="py-10 px-5">
                <h2 className="text-3xl font-medium text-white">Education</h2>
                <ul className="mt-4">
                    {education.map((edu, index) => (
                        <li key={index} className="mb-4 p-4 bg-gray-800 rounded-lg">
                            <h3 className="font-semibold text-lg text-white">{edu.degree}</h3>
                            <p className="text-gray-300">{edu.institution} | {edu.year}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <hr className="border-t border-gray-600 my-10" />
        </>
    );
};

export default Education;