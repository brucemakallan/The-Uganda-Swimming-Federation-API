const Joi = require('joi');

const requiredJoiString = () => Joi.string().min(3).required();

const joiSchema = Joi.object().keys({
	name: requiredJoiString(),
	email: requiredJoiString(),
	subject: requiredJoiString(),
	message: requiredJoiString(),
});

const isValid = (req, res) => {
	const { error } = Joi.validate(req.body, joiSchema);
	if(error) {
		error.details[0] && error.details[0].message && res.status(400).send({message: error.details[0].message});
		return false;
	}
	return true;
};

module.exports = isValid;
