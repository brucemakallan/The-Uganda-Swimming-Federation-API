const isValid = require('./validation');
const Email = require('./models');
const { sendNodeMail } = require('./nodeMailer');

const sendEmail = (req, res) => {
	if (isValid(req, res)) {
		const emailModel = new Email();
		emailModel.name = req.body.name;
		emailModel.email = req.body.email;
		emailModel.subject = req.body.subject;
		emailModel.message = req.body.message;
		const htmlMessage = `
			<h3>Message from the USF Website</h3>
			<strong>Name</strong>: ${emailModel.name}<br />
			<strong>Email</strong>: ${emailModel.email}<br />
			<br />
			${emailModel.message}
		`;
		emailModel.save((err) => {
			if (err) {
				res.status(500).send({message: err.message});
			} else {
				sendNodeMail(emailModel.subject, htmlMessage);
				res.status(201).send(emailModel);
			}
		});
	}
};

module.exports = {
	sendEmail,
};
