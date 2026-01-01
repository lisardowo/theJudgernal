
import './clippy.css';
import { useState } from 'react';
import Navbar from './Navbar';
import  ReactDOM  from 'react-dom';

const thumbnails = [
    'computers be like "this shit true asf" and its the number 1', 
    "im not a UI developer", 
    'I use arch btw',
    'An empty string'
];



const thumbnailSelecter = () =>{
    const index = Math.floor(Math.random() * thumbnails.length );
    return thumbnails[index];
}

const TuxRenderer = () => {
    const [hovered, setHovered] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false); 
    const [selectedThumbnail, setSelectedThumbnail] = useState<string>('');

  const handleMouseEnter = () => {
    setHovered(true);
    setSelectedThumbnail(thumbnailSelecter()); 
  };

  const handleMouseLeave = () => setHovered(false);

  const handleClick = () => {

    if (!selectedThumbnail) {
      setSelectedThumbnail(thumbnailSelecter());    }
    setShowNavbar(prev => !prev);
  };

  return ReactDOM.createPortal(

    <>
      <button
        type="button"
        className="tux"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img src="src/assets/penguinEyes.webp" alt="Tux" />
        {hovered && selectedThumbnail && (
          <div className="tux-tooltip">{selectedThumbnail}</div>
        )}
      </button>

      {showNavbar && <Navbar thumbnail={selectedThumbnail} />}
    </>,
    document.body
    );
}

export default TuxRenderer



