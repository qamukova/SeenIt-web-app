const router = require('express').Router();
// const { Router } = require('express');
const models = require('../../models');
const auth = require('../../modules/auth');

router.get('/', auth(true), (req, res, next) => {
    models.Post.find()
        .then((posts) => { res.status(200); res.send(posts); })
        .catch(next);
});

// router.get('/user', auth(true), (req, res, next) => {
//     const authorPostName = req.query.author;
//
//     models.User.findOne({'username':authorPostName})
//         .then((user) => {
//             const userId = user._id;
//             models.Post.find({'creatorPostId':userId})
//                 .then((userPosts) => {
//                     res.send(userPosts);
//                 }).catch(next);
//         })
//         .catch(next);
// });

router.post('/', auth(true), (req, res, next) => {
    // '/create'
    const { url, imageURL, title, description, author, creatorPostId } = req.body;

    models.Post.create({ url, imageURL, title, description, author, creatorPostId })
        .then((post) => { res.status(201); res.send(post); })
        .catch(next);
});

router.get('/:id', auth(true), (req, res, next) => {
    const id = req.params.id;

    models.Post.findById(id)
        .then((post) => { res.status(200).send(post); })
        .catch(next);
});

router.get('/:id/details', auth(true), (req, res, next) => {
    // '/details/:id'
    const id = req.params.id;

    models.Post.findById(id)
        .then((post) => { res.status(200).send(post); })
        .catch(next);
});

router.put('/:id', auth(true), (req, res, next) => {
    // '/edit/:id'
    const id = req.params.id;
    const { url, imageUrl, title, description } = req.body;

    models.Post.findByIdAndUpdate(id, { url, imageUrl, title, description })
        .then((post) => { res.status(201).send(post); })
        .catch(next);
    // models.Post.updateOne(id, { url, imageUrl, title, description })
});

router.delete('/:id', auth(true), (req, res, next) => {
    // '/delete/:id'
    const id = req.params.id;

    models.Post.findByIdAndRemove(id)
        .then((post) => { res.status(200).send(post); })
        .catch(next);
    // models.Post.deleteOne(id)
});

module.exports = router;