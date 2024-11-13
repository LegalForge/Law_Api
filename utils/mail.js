import { createTransport } from "nodemailer";

export const mailTransporter = createTransport({
    host: 'smtp.gmail.com',
    port:  465,
    secure:  true,
    auth: {
        user: 'djabateylarko@gmail.com',
        pass: process.env.EMAIL_PASSWORD_KEY
    },
    from: 'djabateylarko@gmail.com'
});