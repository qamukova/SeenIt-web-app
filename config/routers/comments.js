const router = require('express').Router();
const models = require('../../models');
const auth = require('../../modules/auth');

router.get('/',auth(true), (req, res, next) => {
    const postId = req.query.postId;

    models.Comment.find({ 'post': postId })
        .then((comments) => { res.status(200); res.send(comments); })
        .catch(next);
});
router.post('/',auth(true), (req, res, next) => {
    const { author, content, postId } = req.body;

    models.Comment.create({ author, content, post: postId })
        .then((comment) => { res.status(201); res.send(comment); })
        .catch(next);
});
router.delete('/:id',auth(true), (req, res, next) => {
    const id = req.params.id;

    models.Comment.findByIdAndRemove(id)
        .then((comment) => { res.status(200); res.send(comment); })
        .catch(next);
});

module.exports = router;