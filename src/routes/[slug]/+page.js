import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
        const post = await import(`../../posts/${params.slug}.md`);
        
        return {
            content: post.default,
            meta: post.metadata,
        }
}
