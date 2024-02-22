const router = require('express').Router();
const { variousFunctions } = require('../../controllers/thoughtsController'); // create controllers directory and functions for routes
// fill out routes with controller functions

//  /api/thoughts
router.route('/')
.get()
.post()

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get()
.put()
.delete()

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post()
.delete()

module.exports = router;
