import './ProjectWindow.css';

interface ProjectWindowProps {
    title: string;
    description: string;
    repoLink?: string;
    tags?: string[];
}

const ProjectWindow = ({ title, description, repoLink, tags }: ProjectWindowProps) => {
    return (
        <div className="project-window">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            
            {tags && tags.length > 0 && (
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                    ))}
                </div>
            )}
            
            {repoLink && (
                <a 
                    href={repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    Ver en GitHub →
                </a>
            )}
        </div>
    );
}

export default ProjectWindow;
