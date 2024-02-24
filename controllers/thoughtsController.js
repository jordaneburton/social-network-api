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
                { _id: req.body.userId },
                { $addToSet: { thoughts: req.body.userId } },
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
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a thought
    async updateThought(req, res) {
        // given thoughtId
        try {
            const user = await User.findOne({ 
                _id: req.body.userId, 
                username: req.body.username 
            });
            if (!req.body.thoughtText || !user) {
                return res.status(400).json({ message: 'Invalid thought or user' });
            }

            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId }, 
                { $set: { 
                    thoughtText: req.body.thoughtText, 
                    username: req.body.username
                }},
                { runValidators: true },
                { new: true }
            );

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a thought
    async deleteThought(req, res) {
        // given thoughtId
        try {
            const deletedThought = await Thought.findOne({ _id: req.params.thoughtId });
            if (!deletedThought) {
                return res.status(404).json({ message: 'No thought with that ID'});
            }

            await Thought.deleteOne({ _id: req.params.thoughtId });
            res.json({ message: `Deleted thought with ID:${deletedThought._id}`});
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Add a reaction
    async addReaction(req, res) {
        // given thoughtId
        try {
            const user = await User.findOne({ 
                _id: req.body.userId, 
                username: req.body.username 
            });
            if (!req.body.thoughtText || !user) {
                return res.status(400).json({ message: 'Invalid thought or user' });
            }

            const reaction = {
                reactionBody: req.body.thoughtText,
                username: req.body.username,
            };
        
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: reaction } },
                { new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Remove a reaction
    async removeReaction(req, res) {
        // given thoughtId
        // given reactionId
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            const removeReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } }},
                { new: true }
            );

            res.json(removeReaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}