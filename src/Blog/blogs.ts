import type { BlogPostData } from './BlogPost';

// Add your blog posts here — they'll appear in order in the reader
const blogPosts: BlogPostData[] = [
    
    {
        title: 'I made this website',
        timestamp: 'March 5, 2026',
        thumbnail: import.meta.env.BASE_URL + 'BlogImages/Buda.png',
        thumbnailAlt: 'Post thumbnail',
        content: `For Gods sake it took long enough finish this thing. 
        I created this website mainly cuz i wanted where to store some 88x31 buttons I found but also 
        I just wanted to have a place where i could put all my thougths and that for people interested to know me better. (Calculus is getting to me)`,
        finalImage: import.meta.env.BASE_URL + 'BlogImages/calculusTwT.png',
        finalImageAlt: 'End of post',
    }
   
];

export default blogPosts;
