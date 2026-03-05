
import { useState, useEffect } from 'react';
import './Blog.css';
import BlogReader from './BlogReader';
import VideoReader from './VideoReader';
import blogPosts from './blogs';
import videoPosts from './videos';
import TuxRenderer from '../clippy';

const Blog = () => {
    const [readerOpen, setReaderOpen] = useState(false);
    const [iconSelected, setIconSelected] = useState(false);
    const [videoReaderOpen, setVideoReaderOpen] = useState(false);
    const [videoIconSelected, setVideoIconSelected] = useState(false);
    const [startMenuOpen, setStartMenuOpen] = useState(false);

    // Scope Navbar positioning to this page only
    useEffect(() => {
        document.body.classList.add('blog-page');
        return () => document.body.classList.remove('blog-page');
    }, []);

    const handleIconClick = () => {
        setIconSelected(true);
    };

    const handleIconDoubleClick = () => {
        setReaderOpen(true);
        setIconSelected(false);
    };

    const handleStartClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setStartMenuOpen(prev => !prev);
    };

    const handleDesktopClick = () => {
        setIconSelected(false);
        setVideoIconSelected(false);
    };

    return (
        <div className="xp-desktop" onClick={handleDesktopClick}>

            {/* Desktop icons — centered */}
            <div className="xp-desktop-center">
                <div
                    className={`xp-icon ${iconSelected ? 'xp-icon-selected' : ''}`}
                    onClick={e => { e.stopPropagation(); handleIconClick(); }}
                    onDoubleClick={e => { e.stopPropagation(); handleIconDoubleClick(); }}
                    title="Double-click to open Journal"
                >
                    <div className="xp-icon-image">
                        <span className="xp-icon-fallback">📓</span>
                    </div>
                    <span className="xp-icon-label">Journal.exe</span>
                </div>

                {iconSelected && (
                    <div className="xp-tooltip">
                        Double-click to open
                    </div>
                )}

                <div
                    className={`xp-icon ${videoIconSelected ? 'xp-icon-selected' : ''}`}
                    onClick={e => { e.stopPropagation(); setVideoIconSelected(true); }}
                    onDoubleClick={e => { e.stopPropagation(); setVideoReaderOpen(true); setVideoIconSelected(false); }}
                    title="Double-click to open Videos"
                >
                    <div className="xp-icon-image">
                        <span className="xp-icon-fallback">🎬</span>
                    </div>
                    <span className="xp-icon-label">Videos.exe</span>
                </div>

                {videoIconSelected && (
                    <div className="xp-tooltip">
                        Double-click to open
                    </div>
                )}
            </div>

            {/* XP Taskbar */}
            <div className="xp-taskbar">
                <div className="xp-start-wrapper">
                    {!startMenuOpen && (
                        <div className="start-indicator">
                            <span>▼</span>
                        </div>
                    )}
                    <button
                        className={`xp-start-btn ${startMenuOpen ? 'xp-start-btn-active' : ''}`}
                        onClick={handleStartClick}
                        onDoubleClick={handleIconDoubleClick}
                    >
                        <span className="xp-start-logo">⊞</span>
                        <span className="xp-start-text">start</span>
                    </button>
                </div>

                <div className="xp-taskbar-divider" />

                {readerOpen && (
                    <div className="xp-taskbar-app active">
                        <span>📓</span>
                        <span>Journal.exe</span>
                    </div>
                )}

                {videoReaderOpen && (
                    <div className="xp-taskbar-app active">
                        <span>🎬</span>
                        <span>Videos.exe</span>
                    </div>
                )}

                <div className="xp-taskbar-tray">
                    <span className="xp-tray-time">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            </div>

            {/* Blog reader window */}
            {readerOpen && (
                <BlogReader
                    posts={blogPosts}
                    onClose={() => setReaderOpen(false)}
                />
            )}

            {/* Video reader window */}
            {videoReaderOpen && (
                <VideoReader
                    posts={videoPosts}
                    onClose={() => setVideoReaderOpen(false)}
                />
            )}

            {/* Clippy — portaled to body, positioned bottom-center via body.blog-page .tux override */}
            {startMenuOpen && <TuxRenderer />}
        </div>
    );
};

export default Blog;
