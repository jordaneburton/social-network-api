const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const { formatDate } = require('../utils/helpers');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,  
            maxlength: 280 
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: formatDate // use a getter method to format timestamp
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

// create virtual to get length of reactions array
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
