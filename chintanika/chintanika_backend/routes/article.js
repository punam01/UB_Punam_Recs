const express=require('express');
const router=express.Router();
const Article=require('../models/Article')

router.get('/',(req,res)=>{
    console.log(req.body);
    const article=Article(req.body);
    console.log(res.body);
    article.save();
})

module.exports=router