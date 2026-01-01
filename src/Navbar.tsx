
import './Navbar.css';
import ReactDOM from 'react-dom';

interface NavbarProps{
   thumbnail: string;
}

const Navbar = ({ thumbnail }: NavbarProps) =>{
   return ReactDOM.createPortal(
   <div id = 'Navbar' className="DialogueBox">
            <p className="dialogue-text">{thumbnail}</p>
                <ul className= "options-container">
                    <li className='option'>
                        <a href='/AboutMe'>What I bring to the table  </a>
                    </li>
                    <li className='option'>
                       <a href='/Projects'> Uhhhm I'm a nerd </a>
                    </li>
                    <li className='option'>
                       <a href='/Blogs'> Blogs!!</a>
                    </li>
                    <li className='option'>
                       <a href='/88x31'>  88x31`s</a>
                    </li>
                </ul>
   </div>,
                document.body
            );
};

export default Navbar;