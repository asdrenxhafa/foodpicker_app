var User = require('../models/User');
var express=require('express');
var mongoose=require('mongoose');
var router=express.Router();
var bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');

router.post('/',(req,res,next)=>{
    const newUser=new User({
      email:req.body.email,
      username:req.body.username,
      password:bcrypt.hashSync(req.body.password,10)    
    })
     newUser.save(err =>{
         if(err){
             return res.status(400).json({
                 title:'error',
                 error:'Email In Use'
                })
         }
         return res.status(200).json()
     })
  })
router.post('/login',(req,res,next)=>{
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

//   router.post('/', function(req, res, next) {
//     User.create(req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });

  module.exports = router;