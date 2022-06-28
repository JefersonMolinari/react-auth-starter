import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: 'jeferson.bdc@gmail.com',
                from: 'jeferson.bdc@hotmail.com',
                subject: 'Does this work?',
                text: 'If you\'re reading this... YEAH!!!',
            });
            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}