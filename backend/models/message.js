const mongoose = require('mongoose');
const User = require('./user');

const messageSchema = new mongoose.Schema(
	{
		project_name: {
			type: String,
			required: true
		},
		instruction: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		authors: {
			type: String,
			required: true
		},
		functionality: {
			type: String,
			required: true
		},
		project_goal: {
			type: String,
			required: true
		},
		link: {
			type: String,
			required: true
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{
		timestamps: true
	}
);

messageSchema.pre('remove', async function(next) {
	try {
		//find a user
		let user = await User.findById(this.user);
		// remove the id of the message from their message list
		user.messages.remove(this.id);
		// save the user
		await user.save();
		// return next
		return next();
	} catch (err) {
		return next(err);
	}
});
const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
