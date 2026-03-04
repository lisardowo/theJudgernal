import React from 'react';
import './Whatibring.css';
import PowerShell from './PowerShell.tsx';
import TuxRenderer from '../clippy';

const WhatIbring: React.FC = () => {
   

    return (
        <>
            
            <PowerShell />
            <TuxRenderer />
        </>
    );
};

export default WhatIbring;