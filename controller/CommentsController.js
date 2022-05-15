const Comments = require('../model/Comments');

module.exports = {

    createComments: async (req, res) => {

        const content = req.body.content;
        const date = req.body.date;

        let newComments = Comments({
            content: content,
            date: date
        })


        newComments.save(function (err) {
            if (err) throw err;
        });
    },
    
    listAllComents: async (req, res) => {
        const comments = Comments.find({});

        if (comments) {
            return res.status(200).json(comments);
        }
    }
}