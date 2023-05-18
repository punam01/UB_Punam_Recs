const express=require('express');
const router=express.Router();
const User=require('../models/User');
const {body,validationResult}=require('express-validator');

router.post('/'
,[
    body('name','name length should be minimum 5').isLength({min:5}),
    body('email','email format ->name@test.com').isEmail(),
    body('password','password length must be greater than 5').isLength({min:6})
]
,(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    res.send(req.body);
})



module.exports=router;