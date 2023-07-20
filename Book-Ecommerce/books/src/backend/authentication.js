const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { SignupModel } = require("./database-auth.js");

function LocalAuth(passport) {
  passport.use(new LocalStrategy(
    function (username, password, done) {
      SignupModel.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }

        // Verifying the password
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            console.log("verified");
            return done(null, user);
          } else {
            console.log("not verified");
            return done(null, false);
          }
        })

      });
    }
  ));
}

module.exports = LocalAuth;