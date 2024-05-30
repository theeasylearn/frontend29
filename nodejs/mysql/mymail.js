var nodemailer = require('nodemailer');
class mail {
    constructor() {
        this.sender = 'mayankjobanputra7@gmail.com';
        this.password = 'qhwc eaic anip sebv';
        this.MailSender = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: this.sender,
                pass: this.password,
            },
        });
        this.MailSender.verify().then(console.log).catch(console.error);
    }
    send(receiver, subject, message) {
        this.MailSender.sendMail({
            from: "Your Name" + `<${this.sender}>`, // sender address
            to: receiver, // list of receivers
            subject: subject, // Subject line
            html: message, // html body
        }).then(info => { console.log({ info }); }).catch(console.error);
    }
}
module.exports.mail = mail;