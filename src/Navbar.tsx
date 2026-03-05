
import './Navbar.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

interface NavbarProps{
   thumbnail: string;
}

const Navbar = ({ thumbnail }: NavbarProps) =>{
   return ReactDOM.createPortal(
   <div id = 'Navbar' className="DialogueBox">
            <p className="dialogue-text">{thumbnail}</p>
                <ul className= "options-container">
                    <li className='option'>
                        <Link to='/AboutMe'>What I bring to the table  </Link>
                    </li>
                    <li className='option'>
                       <Link to='/Projects'> Uhhhm I'm a nerd </Link>
                    </li>
                    <li className='option'>
                       <Link to='/Blogs'> Blogs!!</Link>
                    </li>
                    <li className='option'>
                       <Link to='/88x31'>  88x31`s</Link>
                    </li>
                </ul>
   </div>,
                document.body
            );
};

export default Navbar;