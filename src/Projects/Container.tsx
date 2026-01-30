import './Container.css';
import Snake from './SnakeRenderer';

const Container = () => {
    return(
        <div id='container'>
            <div id = 'snake'><Snake/></div>
                <div id = 'Projects'></div>
        </div>
    );
}

export default Container;