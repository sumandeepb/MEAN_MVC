/* 
 * MEAN MVC Learning Project
 * Released under MIT License
 */

var passport = require('passport'),
        GoogleStrategy = require('passport-google-oauth20').Strategy,
        User = require('mongoose').model('User');

module.exports = function () {
    passport.use(new GoogleStrategy({
        clientID: "1044575738066-9me55kfvftilf5kosuoi1l5qlv7bu2o1.apps.googleusercontent.com",
        clientSecret: "guTfnuMmBuO02mhuAhFVffYa",
        callbackURL: "http://www.example.com/auth/google/callback"
    },
            function (accessToken, refreshToken, profile, cb) {
                User.findOrCreate(
                        {googleId: profile.id},
                        function (err, user) {
                            return cb(err, user);
                        }
                );
            }));
};
