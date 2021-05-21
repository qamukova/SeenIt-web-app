const router = require('express').Router();
const models = require('../../models');
// const authCookieName = config.cookieName;
const modules = require('../../modules');
const config = require('../config');
const auth = require('../../modules/auth');

router.get('/:username', (req, res, next) => {
    const username = req.params.username;
    models.User.findOne({ username })
        .then((user) => {
            res.status(200).send(user)
        }).catch(next);
});

router.get('/:username/posts', auth(true), (req, res, next) => {
    // const token = req.cookies['auth_cookie'];
    // const data = jwt.verifyToken(token);
    // const userId = data.id;
    const authorPostName = req.params.username;

    models.User.findOne({'username':authorPostName})
        .then((user) => {
            const userId = user._id;
            models.Post.find({'creatorPostId':userId})
                .then((userPosts) => {
                    res.send(userPosts);
                }).catch(next);
        })
        .catch(next);
});

router.post('/register', (req, res, next) => {
    const { username, password } = req.body;
    models.User.create({ username, password })
        .then(createdUser => res.status(201).send(createdUser))
        .catch(next);
});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    models.User.findOne({ username })
        .then(user => Promise.all([user, user ? user.comparePasswords(password) : false]))
        .then(([user, match]) => {
            if(!match) { res.status(401).send('Wrong password or username!'); return; }
            return Promise.all([user, modules.jwt.createToken({ id: user._id })]);
        }).then(([user, token]) => {
            res.cookie('auth_cookie', token, { httpOnly: true });
            res.status(200).send(user);
        }).catch(next);
});

router.post('/logout', auth(true), (req, res, next) => {
    const token = req.cookies['auth_cookie'];
    models.tokenBlacklist.create({ token })
        .then(() => {
            res.clearCookie('auth_cookie');
            res.status(200).send({ message: 'Logout Successfully!' });
        }).catch(next);
});

module.exports = router;