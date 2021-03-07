var Restaurant = require('../models/Restaurants');
var express=require('express');
var mongoose=require('mongoose');
var router=express.Router();


router.get('/',function(req,res,next){
    Restaurant.find(function(err,restaurant){
        if(err)return next(err);
        res.json(restaurant);
    })
})

router.get('/:id',function(req,res,next){
    Restaurant.findById(req.params.id,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})

router.post('/',function(req,res,next){
    Restaurant.create(req.body,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})
router.put('/:id',function(req,res,next){
    Restaurant.findByIdAndUpdate(req.params.id,req.body,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})

router.delete('/:id',function(req,res,next){
    Restaurant.findByIdAndRemove(req.params.id,req.body,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})

module.exports = router;

