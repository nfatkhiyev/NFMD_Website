import { json } from '@sveltejs/kit';

async function getPosts() {
    const imports = import.meta.glob('/src/posts/*.md', {eager: true});
    let posts = [];

    for (const path in imports) {
        const file = imports[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');
        if (file){
            const post = {...file.metadata, slug};
            post.published && posts.push(post)
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts;
}

export async function GET() {
    const posts = await getPosts();
    return json(posts);
}
