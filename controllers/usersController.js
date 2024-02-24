const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create new user
    async createUser(req, res) {
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get a user
    async getSingleUser(req, res) {
        // given userId
        try {
            const user = await User.findOne({ _id: req.params.userId });
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update user info
    async updateUser(req, res) {
        // given userId
        try {
            if (!req.body.username || !req.body.email) {
                return res.status(400).json({ message: 'Input valid username and email' });
            }

            const user = await User.findOneAndUpdate(
                { _id: req.params.userId }, 
                { $set: { 
                    username: req.body.username,
                    email: req.body.email, 
                }},
                { runValidators: true },
                { new: true }
            );

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a user
    async deleteUser(req, res) {
        // given userId
        try {
            const deletedUser = await User.findOne({ _id: req.params.userId });
            if (!deletedUser) {
                return res.status(404).json({ message: 'No user with that ID'});
            }

            await Thought.deleteMany({ username: deletedUser.username });
            await User.deleteOne({ _id: req.params.userId });
            res.json({ message: `Deleted user with ID:${deletedUser._id} and their associated thoughts`});
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Add a friend
    async addFriend(req, res) {
        // given userId
        // given friendId
        try {
            const friend = await User.findOne({ _id: req.params.friendId });
            if (!friend) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
        
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Remove a friend
    async removeFriend(req, res) {
        // given userId
        // given friendId
        try {
            const user = await User.findOne({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
            const removeFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );

            res.json(removeFriend);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};