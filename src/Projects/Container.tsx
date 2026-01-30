import './Container.css';
import type { ReactNode } from 'react';

interface ContainerProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

const Container = ({ title, children, className = '' }: ContainerProps) => {
    return(
        <div className={`container ${className}`}>
            <div className="outer dark">
                <div className="dot red"></div>
                <div className="dot amber"></div>
                <div className="dot green"></div>
                {title && <span className="container-title">{title}</span>}
            </div>
            <div className="container-content">
                {children}
            </div>
        </div>
    );
}

export default Container;