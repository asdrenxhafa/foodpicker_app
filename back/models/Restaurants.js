const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Please enter product name'],
        trim:true,
        maxLength:[100,'Product name cannot exceed 100 characters']
    },
    description: {
        type:String,
        required:[true, 'Please enter product description']
    },
    images: [
        {
            public_id: {
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    location:[
        {
            city: {
                type:String,
                required:true
            },
            street: {
                type:String,
                required:true
            }
        }
    ],
    telephone:{
        type:String,
        required:true
    },
    hours:[
        {
            from:{
                type:String,
                required:true
            },
            to:{
                type:String,
                required:true
            }
        }
    ]
    




})

module.exports = mongoose.model('Restaurants',RestaurantSchema);