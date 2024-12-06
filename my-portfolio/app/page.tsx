import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';

export default function Home() {
    return (
        <div className="container mx-auto">
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Experience />
            <Education />
        </div>
    );
}
