
import './projects.css';
import TuxRenderer from './clippy';
import Snake from './SnakeRenderer';

const debugArray = ['123', '123'];

const LinkRepo = ['https://github.com/lisardowo/HABITS.git', 'https://github.com/lisardowo/S.T.A.R.S.git', 'https://github.com/lisardowo/Syllabus-unifier.git'
    ,'https://github.com/lisardowo/HTTPServer.git', 'https://github.com/lisardowo/ShellInC',

];

const Projects = () => {

return (
<>
     console.log(debugArray);
     console.log(LinkRepo);
    <Snake/>
    
    <TuxRenderer/>
</>
);
}

export default Projects;