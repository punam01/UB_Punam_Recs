const mongoose = require("mongoose");
const { Schema } = mongoose;

//unique title and content of article
//tag -->0:philosophy
const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
    unique: true,
  },
  view_counts: {
    type: Number,
    required: true,
  },
  like_counts: {
    type: Number,
    default: 0,
  },
  tag: {
    type: Number,
    default: 0,
  },
  pub_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("article", ArticleSchema);
