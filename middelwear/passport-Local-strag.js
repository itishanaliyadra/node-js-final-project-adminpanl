const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const users = require('../models/admin/ragistermodels');

passport.use(new passportLocal({
    usernameField: "email"
}, async (email, password, done) => {
    let User = await users.findOne({ email });
    if (!User || (!bcrypt.compareSync(password,User.password))) {
        return done(null, false)
    }
    return done(null, User)
}))

passport.serializeUser((User, done) => {
    return done(null, User._id)
})

passport.deserializeUser(async (id, done) => {
  try {
      const user = await users.findById(id);
      return done(null, user)
  } catch (error) {
    console.log(error, false);
  }
})

passport.checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect("/");
}

passport.setAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.findUser = req.user;  // compulsory aa line same j aave
    }
    return next();
}

module.exports = passport;