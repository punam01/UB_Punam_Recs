const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.post("/", (req, res) => {
  console.log(req.body);
  const article = Article(req.body);
  console.log(res.body);
  article.save();
  res.send(req.body);
});

module.exports = router;
