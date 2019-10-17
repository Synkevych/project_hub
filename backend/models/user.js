const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	fullname: {
		type: String,
		required: true,
		unique: false
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	position: {
		type: String,
		require: true
	},
	institution: {
		type: String,
		require: true
	},
	country: {
		type: String,
		require: true
	},
	area: {
		type: String,
		require: true
	},
	tel: {
		type: String,
		require: true
	},
	problem: {
		type: String,
		require: true
	},
	role: {
		type: String,
		required: true,
		default: "user"
	},
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Message'
		}
	]
});

userSchema.pre('save', async function(next) {
	try {
		if (!this.isModified('password')) {
			return next();
		}
		let hashedPassword = await bcrypt.hash(this.password, 10);
		this.password = hashedPassword;
		return next();
	} catch (err) {
		return next(err);
	}
});

userSchema.methods.comparePassword = async function(candidatePassword, next) {
	try {
		let isMatch = await bcrypt.compare(candidatePassword, this.password);
		return isMatch;
	} catch (err) {
		return next(err);
	}
};
const User = mongoose.model('User', userSchema);

module.exports = User;
