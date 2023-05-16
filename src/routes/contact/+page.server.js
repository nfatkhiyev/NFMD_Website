/** @type {import('./$types').Actions} */

import { SF_ACCESS_KEY, SF_URI } from '$env/static/private';
import { SG_API_KEY, SG_MAIL_URI, SG_NEW_CONTACT_URI, SG_SUBSCRIBE_URI, QUOTE_EMAIL, WEBSITE_EMAIL} from '$env/static/private';

import * as sgClient from '@sendgrid/mail';
import { stat } from 'fs';

export const actions = {
	submitContact: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('contactFormName');
        const email = data.get('contactFormEmail');
        const message = data.get('contactFormMessage');
        const newsletter = data.get('newsletter');
        const isNewsletter = newsletter === 'on' ? true : false;

        sgClient.setApiKey(SG_API_KEY);

        const params = {
            to: [
                {
                    email: QUOTE_EMAIL,
                    name: 'NFMD Quotes'
                },
            ],
            cc: [
                {
                    email: email,
                    name: name,
                },
            ],
            from: {
                email: WEBSITE_EMAIL,
                name: 'NFMD Website'
            },
            subject: name + " - NFMD Contact Form Submission",
            content: [
                {
                    type: 'text/html',
                    value: '<p><strong>Name: </strong>' + name + '</p> <p><strong>Email: </strong>' + email + '</p> <p><strong>Messge: </strong>' + message + '</p> <p><strong>Subscribed to Newsletter? </strong>' + isNewsletter + '</p>',
                },
            ],

        };

        let status = await sgClient.send(params)
            .then(() => {
                return true;
            })
            .catch(error => {
                console.error(error);
                return false;
            });
        
        return {success: status};
    }
};
