import { useState } from 'react';
import './BlogReader.css';
import VideoPost from './VideoPost';
import type { VideoPostData } from './VideoPost';

interface VideoReaderProps {
    posts: VideoPostData[];
    onClose: () => void;
}

const VideoReader = ({ posts, onClose }: VideoReaderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevPost = () => setCurrentIndex(prev => Math.max(0, prev - 1));
    const nextPost = () => setCurrentIndex(prev => Math.min(posts.length - 1, prev + 1));

    if (posts.length === 0) {
        return (
            <div className="xp-window-overlay">
                <div className="xp-window">
                    <div className="xp-titlebar">
                        <div className="xp-titlebar-left">
                            <span className="xp-titlebar-icon">🎬</span>
                            <span className="xp-titlebar-title">Videos.exe</span>
                        </div>
                        <div className="xp-window-controls">
                            <button className="xp-ctrl-btn xp-min" title="Minimize"><span>_</span></button>
                            <button className="xp-ctrl-btn xp-max" title="Maximize"><span>□</span></button>
                            <button className="xp-ctrl-btn xp-close" onClick={onClose} title="Close"><span>✕</span></button>
                        </div>
                    </div>
                    <div className="xp-content" style={{ padding: '2rem', textAlign: 'center' }}>
                        <p>No video entries yet.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="xp-window-overlay">
            <div className="xp-window">

                {/* Title bar */}
                <div className="xp-titlebar">
                    <div className="xp-titlebar-left">
                        <span className="xp-titlebar-icon">🎬</span>
                        <span className="xp-titlebar-title">Videos.exe</span>
                    </div>
                    <div className="xp-window-controls">
                        <button className="xp-ctrl-btn xp-min" title="Minimize">
                            <span>_</span>
                        </button>
                        <button className="xp-ctrl-btn xp-max" title="Maximize">
                            <span>□</span>
                        </button>
                        <button className="xp-ctrl-btn xp-close" onClick={onClose} title="Close">
                            <span>✕</span>
                        </button>
                    </div>
                </div>

                {/* Menu bar */}
                <div className="xp-menubar">
                    <span className="xp-menu-item">File</span>
                    <span className="xp-menu-item">Edit</span>
                    <span className="xp-menu-item">View</span>
                    <span className="xp-menu-item">Help</span>
                </div>

                {/* Toolbar / navigation */}
                <div className="xp-toolbar">
                    <button
                        className="xp-toolbar-btn"
                        onClick={prevPost}
                        disabled={currentIndex === 0}
                    >
                        ◀ Previous
                    </button>
                    <span className="xp-post-counter">
                        Entry {currentIndex + 1} of {posts.length}
                    </span>
                    <button
                        className="xp-toolbar-btn"
                        onClick={nextPost}
                        disabled={currentIndex === posts.length - 1}
                    >
                        Next ▶
                    </button>
                </div>

                {/* Content area */}
                <div className="xp-content">
                    <VideoPost post={posts[currentIndex]} />
                </div>

                {/* Status bar */}
                <div className="xp-statusbar">
                    <span className="xp-statusbar-panel">{posts[currentIndex].timestamp}</span>
                    <span className="xp-statusbar-panel">
                        {currentIndex + 1}/{posts.length} entries
                    </span>
                </div>

            </div>
        </div>
    );
};

export default VideoReader;
