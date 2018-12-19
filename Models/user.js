const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema
var UserSchema = new schema({
    username: {
        type: String,
        require: true
    },
  age:{

    type:Number,
    required:true
  },
    email: {
        type: String,
        require: true,
        unique : true
    },
    password: {

        type: String,
        require: true
    },
})
UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) next();

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (error, hash) => {

            user.password = hash;
            next();
        })
    });
});

UserSchema.methods.isValid = function (hashedpassword) {
    return bcrypt.compareSync(hashedpassword, this.password);
}

var usermodel = mongoose.model('User', UserSchema);


module.exports = usermodel;

