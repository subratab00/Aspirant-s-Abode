const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASS
    }
});

const singlesendMail = (name, email) => {

    var mailOptions = {
        from: "Aspirant's Abode <aspirantsabode677@gmail.com>",
        to: `${email}`,
        subject: `NOTICE FOR ADVANCED PAYMENT`,
        html: `<div>
        <h2>Welcome To Aspirant's Abode</h2>
        </div>
        <div>
        <h2>Single Rooms</h2>
        <h4>Hello ${name},</h4>
        <p>
        Your application is under consideration by Aspirant's Abode admin. Please pay the advance payment for the final allocation of hostel. 
        As per your application for Single Room Rs. 5000 needs to be payed as rent for 1 month in advance. The rent needs to be paid within 48 hours failing which will cause the application to be rejected.
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

module.exports = singlesendMail;