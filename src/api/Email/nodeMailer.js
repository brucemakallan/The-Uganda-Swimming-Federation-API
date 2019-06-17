const nodemailer = require('nodemailer');

async function sendNodeMail(subject, html, to) {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		}
	});

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: to || process.env.TO_EMAIL,
		subject,
		html,
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if(err) {
			console.log('NODE-MAILER ERROR: ', err);
			return false;
		}
		console.log('NODE-MAILER SUCCESS:', info);
		return true;
	});
};

module.exports = {
	sendNodeMail,
};
