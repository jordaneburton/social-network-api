const { User } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {},

    // Create new user
    async createUser(req, res) {},

    // Get a user
    async getSingleUser(req, res) {
        // given userId
    },

    // Update user info
    async updateUser(req, res) {
        // given userId
    },

    // Delete a user
    async deleteUser(req, res) {
        // given userId
    },

    // Add a friend
    async addFriend(req, res) {
        // given userId
        // given friendId
    },

    // Remove a friend
    async removeFriend(req, res) {
        // given userId
        // given friendId
    },
};