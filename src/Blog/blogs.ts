import type { BlogPostData } from './BlogPost';

// Add your blog posts here — they'll appear in order in the reader
const blogPosts: BlogPostData[] = [
    {
        title: 'First post: why I made this',
        timestamp: 'March 4, 2026',
        thumbnail: 'https://placehold.co/80x80/1b2627/27C93F?text=01',
        thumbnailAlt: 'Post thumbnail',
        content: `This is the first entry of this journal. I built this page because I wanted a place to write
down thoughts that are too long for a status update but too informal for a proper article.
I wanted it to feel personal — like a real notebook you'd find on the shelf. Hopefully it
does. If you're reading this, hi. I hope you find something here worth your while.`,
        finalImage: 'https://placehold.co/600x200/0d1416/27C93F?text=~+end+of+post+~',
        finalImageAlt: 'End of post',
    },
    {
        title: 'On side projects and motivation',
        timestamp: 'March 10, 2026',
        thumbnail: 'https://placehold.co/80x80/1b2627/FFBD2E?text=02',
        thumbnailAlt: 'Post thumbnail',
        content: `Everyone has a graveyard of half-finished side projects. I have several. An HTTP server,
a habit tracker, a shell implementation in C. Some of them I finished. Most of them
I didn't. I used to feel guilty about the unfinished ones but lately I've come to see
them differently — they're proof that I was curious, that I tried. The process teaches
you things. The shipped product is almost secondary.`,
        finalImage: 'https://placehold.co/600x200/0d1416/FFBD2E?text=~+end+of+post+~',
        finalImageAlt: 'End of post',
    },
    {
        title: 'Things I think about at 2am',
        timestamp: 'March 18, 2026',
        thumbnail: 'https://placehold.co/80x80/1b2627/FF6057?text=03',
        thumbnailAlt: 'Post thumbnail',
        content: `Memory compression. Do we actually remember things or do we reconstruct them every time
we recall them? If so, how accurate are our oldest memories really? I've been thinking
about this and a bunch of other stuff lately. Also: why do water towers look the way
they do? Why don't we have more dirigibles? Who decided the QWERTY layout was fine
and why did everyone agree? The internet is full of answers but 2am is for questions.`,
        finalImage: 'https://placehold.co/600x200/0d1416/FF6057?text=~+end+of+post+~',
        finalImageAlt: 'End of post',
    },
];

export default blogPosts;
