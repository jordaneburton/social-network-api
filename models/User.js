const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true, 
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true, 
            match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+$/ // validation for emails, using regex
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
        ],
        // toJSON: {
        //     virtuals: true,
        // },
        // id: false,
    }
);
    
// create virtual to get length of friends list
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
