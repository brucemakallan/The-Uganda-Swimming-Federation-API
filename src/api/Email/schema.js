const requiredString = {
	type: String,
	trim: true,
	required: true,
};

module.exports = {
	name: { ...requiredString },
	email: { ...requiredString },
	subject: { ...requiredString },
	message: { ...requiredString },
};
