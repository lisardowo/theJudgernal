import './BlogPost.css';

export interface VideoPostData {
    title: string;
    videoUrl: string;
    timestamp: string;
    thumbnail?: string;
    thumbnailAlt?: string;
    content: string;
}

interface VideoPostProps {
    post: VideoPostData;
}

const VideoPost = ({ post }: VideoPostProps) => {
    return (
        <div className="blog-post">
            <div className="blog-post-header">
                <h2 className="blog-post-title">
                    <a
                        href={post.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blog-post-video-link"
                    >
                        {post.title}
                    </a>
                </h2>
                <span className="blog-post-timestamp">— {post.timestamp}</span>
            </div>

            <div className="blog-post-body">
                <p className="blog-post-content">{post.content}</p>
            </div>

            {post.thumbnail && (
                <div className="blog-post-final-image-container">
                    <img
                        src={post.thumbnail}
                        alt={post.thumbnailAlt || post.title}
                        className="blog-post-final-image"
                    />
                </div>
            )}
        </div>
    );
};

export default VideoPost;
