import './BlogPost.css';

export interface BlogPostData {
    title: string;
    timestamp: string;
    thumbnail: string;
    thumbnailAlt?: string;
    content: string;
    finalImage: string;
    finalImageAlt?: string;
}

interface BlogPostProps {
    post: BlogPostData;
}

const BlogPost = ({ post }: BlogPostProps) => {
    return (
        <div className="blog-post">
            <div className="blog-post-header">
                <h2 className="blog-post-title">{post.title}</h2>
                <span className="blog-post-timestamp">— {post.timestamp}</span>
            </div>

            <div className="blog-post-body">
                <img
                    src={post.thumbnail}
                    alt={post.thumbnailAlt || post.title}
                    className="blog-post-thumbnail"
                />
                <p className="blog-post-content">{post.content}</p>
            </div>

            <div className="blog-post-final-image-container">
                <img
                    src={post.finalImage}
                    alt={post.finalImageAlt || ''}
                    className="blog-post-final-image"
                />
            </div>
        </div>
    );
};

export default BlogPost;
