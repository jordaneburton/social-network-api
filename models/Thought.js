const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,  // DOUBLE CHECK
            maxlength: 280 // THESE TWO FIELDS
        },
        createdAt: {
            type: Date,
            default: Date.now()
            // use a getter method to format timestamp
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
        // create virtual to get length
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
