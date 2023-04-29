/** @type {import('./$types').Actions} */
export const actions = {
	submitContact: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('contactFormName');
        const email = data.get('contactFormEmail');
        const newsletter = data.get('newsletter');
        return { success: true };
    },
	subscribeNewsletter: async ({ request }) => {
		// TODO register the user
	}
};
