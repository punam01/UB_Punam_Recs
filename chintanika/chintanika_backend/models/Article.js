const mongoose = require('mongoose');
const {Schema}=mongoose;

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required:true
    },
    view_counts: {
        type: Number,
        required:true
    },
    like_counts: {
        type:Number,
        default:0
    },
    about: {
        type: String,
        default:" "
    },
    pub_date: {
        type: Date,
        default:Date.now
    },
});

module.exports = mongoose.model('article',ArticleSchema);