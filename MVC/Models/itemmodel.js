const mongoose = require("mongoose");

const itemSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price :{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true

    },
    Image:{
        type:String,
        required:true
    },

},
{ timestamps: true }
)

const Items=mongoose.model("Item",itemSchema)

module.exports =Items;