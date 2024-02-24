const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create new thought
    async createThought(req, res) {
        try {
            const user = await User.findOne({ 
                _id: req.body.userId, 
                username: req.body.username 
            });
            if (!user) { 
                return res.status(404).json({ message: "No user with that ID" }) 
            }
            
            const thoughtData = await Thought.create({ 
                thoughtText: req.body.thoughtText, 
                username: req.body.username
            });
            
            User.findOne(
                { _id: req.body.userId, username: req.body.username },
                { $addToSet: { thoughts: thoughtData._id } },
                { new: true }
            );

            res.json(thoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get a thought
    async getSingleThought(req, res) {
        // given thoughtId
    },

    // Update a thought
    async updateThought(req, res) {
        // given thoughtId
    },

    // Delete a thought
    async deleteThought(req, res) {
        // given thoughtId
    },

    // Add a reaction
    async addReaction(req, res) {
        // given thoughtId
    },

    // Remove a reaction
    async removeReaction(req, res) {
        // given thoughtId
        // given reactionId
    },
}