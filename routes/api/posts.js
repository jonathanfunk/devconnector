const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validatePostInput = require('./../../validation/post');

// Load Post Model
const Post = require('./../models/Post');

//@Route  GET api/posts/test
//@Desc   Tests posts route
//@Access Public
router.get('/test', (req, res) =>
  res.json({
    msg: 'Posts works!'
  })
);

//@Route  GET api/posts
//@Desc   Create post
//@Access Private

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
