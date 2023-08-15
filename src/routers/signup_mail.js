const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASS
    }
});

const sSendMail = (name, email) => {

    var mailOptions = {
        from: "Aspirant's Abode <aspirantsabode677@gmail.com>",
        to: `${email}`,
        subject: `WELCOME TO Aspirant's Abode`,
        html: `<div>
        <h2>Welcome To Aspirant's Abode</h2>
        </div>
        <div>
        <h4>Hello ${name},</h4>
        <p>You are among the earliest members to join the community. Check out our hostels in Saltlake, Kolkata where we provide <br>quality living at reasonable price. You can find more about us from our <a href="#">Frequently Asked Questions</a> section.<br> <a href="#">Log in</a> for more information. 
        </p>
        </div>
        <br>
        
        <p>For any further queries, you can contact us via:<br>
        Email: aspirantsabode677@gmail.com<br>
        Phone: 7477558802<br>
        Whatsapp: 7477558802
</p>
`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports = sSendMail;
