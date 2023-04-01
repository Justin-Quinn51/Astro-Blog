import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'Justin Quinn | Blog',
        description: 'My journey learning Astro',
        site: 'https://https://justin-quinn-astro-blog.netlify.app',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}