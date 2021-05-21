const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const tokenBlacklist = require('./token-blacklist');

module.exports = {
    User,
    Post,
    Comment,
    tokenBlacklist
};
