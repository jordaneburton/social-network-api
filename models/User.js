const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            // unique
            required: true,
            // trimmed
        },
        email: {
            type: String,
            required: true,
            // unique
            // validation
        },
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'thought',
            },
        ],
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'user',
            },
            // create virtual to get length
        ],
    }
);

const User = model('user', userSchema);

module.exports = User;
