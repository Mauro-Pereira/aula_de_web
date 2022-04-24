const mongoose = require('../DB/Config');

const CommentsSchema = mongoose.Schema({
    content: String,
    date: Date
});

const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;