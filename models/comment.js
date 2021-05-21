const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
   author: {
       type: String,
       required: true
   },
   content: {
       type: String,
       required: true
   },
   post: {
       // type: String
       type: mongoose.Types.ObjectId,
       ref: 'Post'
   }
});

module.exports = mongoose.model('Comment', commentSchema);