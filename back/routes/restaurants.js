var Restaurant = require('../models/Restaurants');
var express=require('express');
var mongoose=require('mongoose');
var router=express.Router();
const multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')
    },
    filename: function (req, file, cb) {
        let ext = ''; // set default extension (if any)
        if (file.originalname.split(".").length>1) // checking if there is an extension or not.
            ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }
});

var upload = multer({ storage: storage });

// const upload = multer({dest : 'images'});

var path = require('path'),
    __imagesPath = path.dirname(module.parent.filename) + "\\images";


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
router.put('/:id',upload.single('image'),function(req,res,next){
    let oldRestaurnat = Restaurant.findById(req.params.id,function(err,post){
        if(err)return next(err);
        return res;
    })

    res.send(oldRestaurnat.restaurant_image_url);

    // let restaurant = {
    //     name: req.body.restaurant_name,
    //     description: req.body.restaurant_description,
    //     images: [
    //         {
    //             public_id: req.body.restaurant_images_public_id,
    //             url: __imagesPath + '\\' + req.file.filename
    //         }
    //     ],
    //     location:[
    //         {
    //             city: req.body.restaurant_location_city ,
    //             street: req.body.restaurant_location_street
    //         }
    //     ],
    //     telephone: req.body.restaurant_telephone
    // }
    //
    // Restaurant.findByIdAndUpdate(req.params.id,restaurant,function(err,post){
    //     if(err)return next(err);
    //     res.json(post);
    // })
})

router.delete('/:id',function(req,res,next){
    Restaurant.findByIdAndRemove(req.params.id,req.body,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})

module.exports = router;

