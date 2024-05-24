const express = require('express');
const passport = require('passport');
const { signup, login, sendOtp, verifyOtp } = require('../controllers/authController');

const router = express.Router();

// router.get('/profile', requireAuth, getProfile);


router.post('/signup', signup);
router.post('/login', login);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.send({ token: generateToken(req.user) });
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook'), (req, res) => {
  res.send({ token: generateToken(req.user) });
});

module.exports = router;
