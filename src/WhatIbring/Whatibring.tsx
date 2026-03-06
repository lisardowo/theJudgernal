import React from 'react';
import './Whatibring.css';
import PowerShell from './PowerShell.tsx';
import TuxRenderer from '../clippy';

const buttons = ` Important : In 'what i bring to the table' section (about me) minimice, maximize and close 
button are not intended for use, they're decorative elements since i was trying
to recreate the windows powershell looks. To navigate throught the page (display the navbar and go to other sections)
you shall use the little tux head that is on your right with the arrow pointing to him.

This component when hovered will display a lil thought i find funny and when clicked will display the navbar


`


alert(buttons)


const WhatIbring: React.FC = () => {
   

    return (
        <>
            
            <PowerShell />
            <TuxRenderer />
        </>
    );
};

export default WhatIbring;