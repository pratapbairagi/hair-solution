// const mongoose = require("mongoose");
const Product = require("../model/products");
const cloudinary = require("../config/cloudinary")
const ErrorHandler = require("../middleware/errorHandler")

exports.productCreate = async (req, res, next) => {
    try {
        const { title, description, type_, types, sizes, colors, gender, branch, image } = req.body;

        if (!title && !description || !type_ || !(gender.length > 0) || !(branch.length > 0) || !image) {
            return next(new ErrorHandler("All fields are Required !", 400))
        }

            const result = await cloudinary.uploader.upload(image, {
                folder : "hair-fixing"
            });

           if( !result.public_id ){
            return next( new ErrorHandler("Something went wrong while uploading image, try other one ! ", 400))

           };

            const product = await Product.create({
                title : title.toLowerCase(),
                description : description.toLowerCase(),
                type_ :type_.toLowerCase(),
                types : types,
                colors : colors,
                sizes : sizes,
                branch : branch,
                gender : gender,
                createdAt : Date.now(),
                image : {
                    url : result.secure_url,
                    public_id : result.public_id
                }
            });

            const products = await Product.find()

            res.status(201).json({
                success : true,
                message : `${type_.toUpperCase()} created successfully !`,
                product,
                products
            });

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.productDetails = async (req, res, next) => {
    try {

    } catch (error) {

    }
}

exports.productsDetails = async (req, res, next) => {
    try {
        let query = {}
        const { title, gender, branch, type, color, size } = req.query;

        for (let key in req.query) {
            if (key = "title") {
                query[key] = { $in: req.query[key] }
            }
        }

        const products = await Product.find();

        res.status(200).json({
            success: true,
            products: products,
            message: ""
        })


    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.productUpdate = async (req, res, next) => {
    try {

        let image;

        const isProductExist = await Product.findById(req.params.id);

        if (req.body.image.includes("data:image")) {
            await cloudinary.uploader.destroy(isProductExist.image.public_id);

            let result = await cloudinary.uploader.upload(req.body.image);
            image = {
                public_id: result.public_id,
                url: result.secure_url
            }
        } else {
            image = {
                public_id: isProductExist.image.public_id,
                url: isProductExist.image.url
            }
        }

        req.body.image = image;
        req.body.gender = [...new Set(req.body.gender)]

        let updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body);
        const products = await Product.find();

        res.status(200).json({
            success: true,
            message: `${updatedProduct.title} updated successfully !`,
            product: updatedProduct,
            products: products
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.productDelete = async (req, res, next) => {
    try {
        const isProductExist = await Product.findById(req.params.id);

        if(!isProductExist){
            return next( new ErrorHandler( "Products does not exist or deleted !", 404 ))
        };

        await cloudinary.uploader.destroy(isProductExist.image.public_id);

        await Product.findByIdAndDelete(isProductExist._id);

        const products = await Product.find();

        res.status(200).json({
            success : true,
            message : "Product deleted successfully !",
            products : products
        });

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}


exports.order = async (req, res, next) => {
    try {

        if (!req.body.image) {
            return next(new ErrorHandler('No files were uploaded.', 404));
        }

        const result = await cloudinary.uploader.upload(req.body.image, {
            folder : "order_pdfs"
        })

        res.status(201).json({
            message: "Order created successfully !",
            order: {
                secure_url: result.secure_url,
                public_id: result.public_id
            },
            success: true
        })


    } catch (error) {

    }
};

exports.orderCancel = async (req, res, next) => {
    try {

        let id = req.params.id;
        id = id.replace(/pratap/g, "/");

        await cloudinary.uploader.destroy(id)

        res.status(200).json({
            success : true,
            message : "Order deleted successful !"
        });

    } catch (error) {
        return next( new ErrorHandler(error))
    }
}