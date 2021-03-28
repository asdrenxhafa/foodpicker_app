var User = require('../models/User');
var express=require('express');
var mongoose=require('mongoose');
var router=express.Router();
var bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');

router.post('/',(req,res,next)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err) return res.status(500).json({
            title:'Server error',
            error:err
        })
        if(!user){
            return res.status(401).json({
                title:'User not found',
                error:'Invalid Credentials'
            })
        }
        if(!bcrypt.compareSync(req.body.password,user.password)){
            return res.status(401).json({
                title:'Login failed',
                error:'Invalid Credentials'
            })
        }
        let token=jwt.sign({userId:user._id}, 'SECRETKEY');
        

    })
})

module.exports = router;