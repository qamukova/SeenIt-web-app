const jwt = require('./jwt');
const models = require('../models');
const config = require('../config/config');
// const { cookieName } = require('../config/config');

module.exports = function (isAutenticated = false) {
    return function (req, res, next) {
        const token = req.cookies[config.cookieName] || '';
        Promise.all([
            jwt.verifyToken(token),
            models.tokenBlacklist.findOne({ token })
        ]).then(([data, blacklistToken]) => {
            if (blacklistToken) {
                return Promise.reject(new Error('blacklisted token'));
            }
            models.User.findById(data.id).then(user => {
                if(!user) { return Promise.reject(); }
                req.user = user;
                next();
            });
        }).catch((err) => {
            if(!isAutenticated) { next(); return; }
            next(err);
        });
    }
};
