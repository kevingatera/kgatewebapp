var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')

var UserSchema = new Schema({
    name : {
        type: String,
        lowercase: true,
        required: true
    },
    username : {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    }
    });

UserSchema.pre('save', function(next) {
    var user = this; //Whatever the user runs in the middleware
    bcrypt.hash(user.password, null, null, function(err, hash){
        user.password = hash;
        next();
    })
});

/* The following will create a custom method for logging in */

UserSchema.methods.comparePasswords = function(password) {
    /* password is the one that the user entered
        this.password is the one we stored in the database */
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
