const jwt = require('jsonwebtoken');
const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const generateToken = (user) => {
  return jwt.sign({ sub: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.signup = async (req, res) => {
  const { name, email, password, phone } = req.body;
  let user = req.body;
//   let user = await User.findOne({ email });
  if (user) return res.status(400).send('User already exists');
  
  user = new User({ name, email, password, phone });
//   await user.save();
  
  res.send({ token: generateToken(user) });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('Invalid credentials');
  
  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).send('Invalid credentials');
  
  res.send({ token: generateToken(user) });
};

exports.sendOtp = async (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
//   const user = await User.findOne({ phone });
  if (!user) return res.status(400).send('User not found');
  
  user.otp = otp;
//   await user.save();
  
//   await twilio.messages.create({
//     body: `Your OTP is ${otp}`,
//     from: process.env.TWILIO_PHONE_NUMBER,
//     to: phone
//   });
  
  res.send('OTP sent');
};

exports.verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;
//   const user = await User.findOne({ phone, otp });
  if (!user) return res.status(400).send('Invalid OTP');
  
  user.otp = undefined;
//   await user.save();
  
  res.send({ token: generateToken(user) });
};
