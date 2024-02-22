const router = require('express').Router();
const { variousFunctions } = require('../../controllers/usersController'); // create controllers directory and functions for routes
// fill out routes with controller functions

// /api/users
router.route('/')
.get()
.post()

// /api/users/:userId
router.route('/:userId')
.get()
.put()
.delete()

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
.post()
.delete()

module.exports = router;
