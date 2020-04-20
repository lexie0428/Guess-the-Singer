const express = require('express');
const User = require('../models/users');

const router = express.Router();

router.post('/change', async (req, res, next) => {
  console.log(req.body);
  
  const user = await User.findOne({login: req.body.login});
  if (req.body.answer === true) {
    await User.updateOne({login: req.body.login}, {correct: user.correct + 1});
  } else {
    await User.updateOne({login: req.body.login}, {incorrect: user.incorrect + 1});
  }
  res.json({res: true});
});

router.get('/all', async (req, res, next) => {
  const users = await User.find({});
  res.json({users});
});

router.post('/info', async (req, res, next) => {
  console.log(req.body);
  
  const user = await User.findOne({login: req.body.login});
  res.json({user});
});

module.exports = router;
