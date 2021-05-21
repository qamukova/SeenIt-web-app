const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.methods.comparePasswords = function(password) {
   return new Promise((resolve, reject) => {
       bcrypt.compare(password, this.password, function (err, res) {
           if(err) { reject(err); return; }
           resolve (res);
       });
   });
};

userSchema.pre('save', function (next) {
    if(this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if(err) { next(err); return; }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if(err) { next(err); return; }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
