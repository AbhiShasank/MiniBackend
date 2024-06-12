const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    p_id:Number,
    p_name:String,
    p_cost:String,
    p_cat:String,
    p_desc:String,
    p_image:String
})


module.exports = mongoose.model('Product',productSchema)
