const express = require("express");
const router = express.Router();
//import articles model
const Article = require("../models/Article");
//import middleware
const fetchUser = require("../models/middleware/fetchUser");
//validate articles
const { body, validationResult } = require("express-validator");

//ROUTE-1: Get all the articles of a user using: GET "/api/article/fetchallarticles" .Login Required
//1.Get token from header
router.get("/fetchallarticles", fetchUser, async (req, res) => {
  try {
    const articles = await Article.find({ user: req.user.id });
    res.json(articles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE-2: Add new article: POST "/api/article/addarticle" .Login Required
router.post(
  "/addarticle",
  fetchUser,
  [
    body("title", "title length should be minimum 5").isLength({ min: 5 }),
    body("description", "description length should be minimum 5").isLength({
      min: 5,
    }),
    body("content", "content must be unique").exists()
  ],
  async (req, res) => {
    try {
      const { title, description, content, view_counts, like_counts, tag } =
        req.body;
      //if there are error -->return bad request and error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      //id no error ->save article
      const article = new Article({
        title,
        description,
        content,
        view_counts,
        like_counts,
        tag,
        user: req.user.id,
      });
      const savedArticle = await article.save();
      res.json(savedArticle);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Article with same content already exists");
    }
  }
);




module.exports = router;
