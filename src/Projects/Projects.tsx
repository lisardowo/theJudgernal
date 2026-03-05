import './projects.css';
import TuxRenderer from '../clippy';
import Container from './Container.tsx';
import ProjectWindow from './ProjectWindow.tsx';
import Snake from './SnakeRenderer.tsx';

const projectsData = [
    {
        title: 'HABITS',
        description: 'VScode extension to reduce harmful habits of the programmer.',
        repoLink: 'https://github.com/lisardowo/HABITS.git',
        tags: ['Vs code' , 'TypeScript', 'Health']
    },
    {
        title: 'S.T.A.R.S.',
        description: 'DRL-routing and transmission data protocol .',
        repoLink: 'https://github.com/lisardowo/S.T.A.R.S.git',
        tags: ['JavaScript','Python','Machine Learning', 'Node.js']
    },
    {
        title: 'Syllabus Unifier',
        description: 'Tool for unifying and organizing academic syllabi.',
        repoLink: 'https://github.com/lisardowo/Syllabus-unifier.git',
        tags: ['Python', 'Education']
    },
    {
        title: 'HERMES',
        description: 'Doomsday device-hub inspired in fallout.',
        repoLink: 'https://github.com/lisardowo/HERMES.git',
        tags: ['C', 'Networking', 'Privacy', 'Security']
    },
    {
        title: 'Shell In C',
        description: 'Shell implementation written in C.',
        repoLink: 'https://github.com/lisardowo/ShellInC',
        tags: ['C', 'Operating Systems']
    }
];

const Projects = () => {
    return (
        <>
            <div className="projects-grid"> {/* Ahora usa flex column */}
                
                <Container title="Commit History">
                    <Snake />
                </Container>

                
                <Container title="Projects">
                    {projectsData.map((project, index) => (
                        <ProjectWindow
                            key={index}
                            title={project.title}
                            description={project.description}
                            repoLink={project.repoLink}
                            tags={project.tags}
                        />
                    ))}
                </Container>

                
            </div>
            
            <TuxRenderer />
        </>
    );
}

export default Projects;