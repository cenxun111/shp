const Products = require("../models/productModel");

const productCtrl = {
    createNewProduct: async (req,res) => {
        const newProduct = new Products(req.body);
        try{
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        }catch(err){
            res.status(500).json(err.message);
        }
    }
};

 module.exports  = productCtrl