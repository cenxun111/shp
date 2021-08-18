const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    product_id:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        trim:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    images:{
        type:Object,
       
    },
    category:{
        type:String,
        required:true
    },
    checked:{
        type: Boolean,
        default: false
    },
    sold:{
        type: Number,
        default: 0
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);