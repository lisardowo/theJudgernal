import React from 'react';
import './Whatibring.css';
import PowerShellWindow from './PowerShellWindow';
import TuxRenderer from '../clippy';

const WhatIbring: React.FC = () => {
   

    return (
        <>
            
            <PowerShellWindow />
            <TuxRenderer />
        </>
    );
};

export default WhatIbring;