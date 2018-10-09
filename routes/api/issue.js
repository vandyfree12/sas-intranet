const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const utils = require('../../utils/utils');

// Post model
const Issue = require('../../models/Issue');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validatePostInput = require('../../validation/issue');

// @route   GET api/issue/test
// @desc    Tests issue route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Issue tracker works' }));

// @route   GET api/issues
// @desc    Get issues
// @access  Public
router.get('/', (req, res) => {
  Issue.find()
    .sort({ date: -1 })
    .then(issues => res.json(issues))
    .catch(err => res.status(404).json({ nopostsfound: 'No issues found' }));
});

// @route   GET api/issues/:id
// @desc    Get post by id
// @access  Public
router.get('/:id', (req, res) => {
  Issue.findById(req.params.id)
    .then(issue => res.json(issue))
    .catch(err =>
      res.status(404).json({ nopostfound: 'No issue found with that ID' })
    );
});

// @route   POST api/issues
// @desc    Create issue
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),(req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPost = new Issue({
      ticket: utils.generateTransId(),
      title: req.body.title,
      description: req.body.description,
      assignto: req.body.assignto,
      projects: req.body.areasAffected,
      status: req.body.status,
      priority: req.body.priority,
      department: req.body.department,
      datecompleted: req.body.datecompleted,
      user: req.user.id
    });

    newPost.save().then(issue => res.json(issue))
                  .catch(err => res.status(404).json({ error: err }));

  }
);

// @route   DELETE api/issues/:id
// @desc    Delete issue
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Issue.findById(req.params.id)
        .then(issue => {
          // Check for post owner
          if (issue.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }

          // Delete
          issue.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No issue found' }));
    });
  }
);

module.exports = router;
