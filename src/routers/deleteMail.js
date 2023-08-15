const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASS
    }
});

const deleteMail = (name, email) => {

    var mailOptions = {
        from: "Aspirant's Abode <aspirantsabode677@gmail.com>",
        to: `${email}`,
        subject: `APPLICATION REJECTED`,
        html: `<div>
        <h2>Your Application to Aspirant's Abode has been REJECTED !!!</h2>
        </div>
        <div>
        <h4>${name},</h4>
        <p>
        We regret to inform you that your application to Aspirant's Abode for opting a room has been rejected due to some invalid data entered by you. You may therefore refill the form later and make sure the data entered by you is true to your knowledge.
        </p>
        </div>
        <br>
        
        <p>For any further queries, you can contact us via:<br>
        Email: aspirantsabode677@gmail.com<br>
        Phone: 7477558802<br>
        Whatsapp: 7477558802
        </p>`
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports = deleteMail;