import './projects.css';
import TuxRenderer from '../clippy';
import Container from './Container.tsx';
import ProjectWindow from './ProjectWindow.tsx';
import Snake from './SnakeRenderer.tsx';

const projectsData = [
    {
        title: 'HABITS',
        description: 'Aplicación para gestionar y trackear hábitos diarios.',
        repoLink: 'https://github.com/lisardowo/HABITS.git',
        tags: ['React', 'TypeScript', 'Productivity']
    },
    {
        title: 'S.T.A.R.S.',
        description: 'Sistema de gestión y organización de tareas.',
        repoLink: 'https://github.com/lisardowo/S.T.A.R.S.git',
        tags: ['JavaScript', 'Node.js']
    },
    {
        title: 'Syllabus Unifier',
        description: 'Herramienta para unificar y organizar syllabi académicos.',
        repoLink: 'https://github.com/lisardowo/Syllabus-unifier.git',
        tags: ['Python', 'Education']
    },
    {
        title: 'HTTP Server',
        description: 'Servidor HTTP personalizado desde cero.',
        repoLink: 'https://github.com/lisardowo/HTTPServer.git',
        tags: ['C', 'Networking']
    },
    {
        title: 'Shell In C',
        description: 'Implementación de una shell en lenguaje C.',
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

                {/* Contenedor con todos los proyectos */}
                <Container title="My projects">
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