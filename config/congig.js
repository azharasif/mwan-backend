const passport = require('passport');
const UserModel = require('../Models/user')
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {

    UserModel.findById(id).then((user) => {

        if(!user) return done(null,false);

        done(null,user);
    });

});



passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {

    UserModel.findOne({
        Email:email
    }).then((user) => {

        if (!user) return done(null, false);

        user.comparePassword(password, (error, Ismatch) => {

            if (!Ismatch) return done(null, false);

            done(null, user);

        });


    }).catch((err) => {
        done(err);
    });
}));