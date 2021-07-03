var Restaurant = require('../models/Restaurants');
var express=require('express');
var mongoose=require('mongoose');
const multer = require('multer');
const fs = require('fs');
var router=express.Router();


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../front/public/logos')
    },
    filename: function (req, file, cb) {
        let ext = ''; // set default extension (if any)
        if (file.originalname.split(".").length>1) // checking if there is an extension or not.
            ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }
});

var upload = multer({ storage: storage });


var path = require('path'),
    __imagesPath = "logos";


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

router.post('/',upload.single('image'),function(req,res,next){

    let restaurant = {
        name: req.body.restaurant_name,
        description: req.body.restaurant_description,
        images: [
            {
                public_id: req.body.restaurant_images_public_id,
                url: __imagesPath + '\\' + req.file.filename
            }
        ],
        location:[
            {
                city: req.body.restaurant_location_city ,
                street: req.body.restaurant_location_street
            }
        ],
        telephone: req.body.restaurant_telephone,
        hours:[
            {
                from:req.body.restaurant_hours_from,
                to:req.body.restaurant_hours_to
            }
        ]
    }

    Restaurant.create(restaurant,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})
router.put('/:id',upload.single('image'),function(req,res,next){

    // Deleting old image
    deleteImageRestaurant(req.params.id);

    let restaurant = {
        name: req.body.restaurant_name,
        description: req.body.restaurant_description,
        images: [
            {
                public_id: req.body.restaurant_images_public_id,
                url: __imagesPath + '\\' + req.file.filename
            }
        ],
        location:[
            {
                city: req.body.restaurant_location_city ,
                street: req.body.restaurant_location_street
            }
        ],
        telephone: req.body.restaurant_telephone,
        hours:[
            {
                from:req.body.restaurant_hours_from,
                to:req.body.restaurant_hours_to
            }
        ]
    }

    Restaurant.findByIdAndUpdate(req.params.id,restaurant,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})

router.delete('/:id',function(req,res,next){
    // Deleting image of the item being deleted
    deleteImageRestaurant(req.params.id);

    Restaurant.findByIdAndRemove(req.params.id,req.body,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})


var deleteImageRestaurant = function(id) {
    Restaurant.findById(id,function(err,post){
        if(err)return next(err);
        fs.unlinkSync("C:\\Users\\Asdren\\Desktop\\foodpicker_app\\front\\public\\" + "\\" + post.images[0].url);
    })
}

module.exports = router;

