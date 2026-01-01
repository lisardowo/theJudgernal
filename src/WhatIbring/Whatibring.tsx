import '../clippy.tsx'
import TuxRenderer from '../clippy.tsx';
import './Whatibring.css'
import ComfortCharacters from './ComfortCharacters.tsx';

const WhatIbring = () => {
    return(
        <>
        
        <TuxRenderer/>
        <div className = "cards-container">
            <ComfortCharacters
            character = ""
            show = ""
            />
            </div>
        </>
    );
}

export default WhatIbring; 