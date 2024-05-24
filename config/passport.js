const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
// const mongoose = require('mongoose');
// const User = mongoose.model('User');

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: '/auth/google/callback'
// }, async (accessToken, refreshToken, profile, done) => {
//   const existingUser = await User.findOne({ googleId: profile.id });
//   if (existingUser) {
//     return done(null, existingUser);
//   }
//   const user = await new User({ googleId: profile.id, name: profile.displayName, email: profile.emails[0].value }).save();
//   done(null, user);
// }));

// passport.use(new FacebookStrategy({
//   clientID: process.env.FACEBOOK_APP_ID,
//   clientSecret: process.env.FACEBOOK_APP_SECRET,
//   callbackURL: '/auth/facebook/callback',
//   profileFields: ['id', 'displayName', 'emails']
// }, async (accessToken, refreshToken, profile, done) => {
//   const existingUser = await User.findOne({ facebookId: profile.id });
//   if (existingUser) {
//     return done(null, existingUser);
//   }
//   const user = await new User({ facebookId: profile.id, name: profile.displayName, email: profile.emails[0].value }).save();
//   done(null, user);
// }));

// passport.use(new JwtStrategy({
//   jwtFromRequest: ExtractJwt.fromHeader('authorization'),
//   secretOrKey: process.env.JWT_SECRET
// }, async (payload, done) => {
//   const user = await User.findById(payload.sub);
//   if (!user) {
//     return done(null, false);
//   }
//   done(null, user);
// }));

module.exports = passport;
