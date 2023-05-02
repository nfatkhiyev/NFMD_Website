/** @type {import('./$types').Actions} */

import { SF_ACCESS_KEY, SF_URI } from '$env/static/private';
export const actions = {
	submitContact: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('contactFormName');
        const email = data.get('contactFormEmail');
        const message = data.get('contactFormMessage');
        const newsletter = data.get('newsletter');

        const params = {
            accessKey: SF_ACCESS_KEY,
            name: name,
            subject: name + " - NFMD Contact Form Submission",
            email: email,
            $newsletter: newsletter,
            message: message,
            replyTo: "@",
        };
        
        let status = await fetch(SF_URI,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            })
                .then(resp => resp.json())
                .then(data => { return data });
        return status;
    }
};
