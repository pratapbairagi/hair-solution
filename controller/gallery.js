const ErrorHandler = require("../middleware/errorHandler")
const cloudinary = require("../config/cloudinary");
const Gallery = require("../model/gallery");


exports.galleryCreate = async (req, res, next) => {
    try {
        const { title, image, details, social, branch } = req.body;

        if(!title || !image || !details || !branch || social.length === 0){
            return next( new ErrorHandler("All fields are required !", 400))
        };


        const result = await cloudinary.uploader.upload(image, {
            folder : "gallery"
        });

        const gallery = await Gallery.create({
            title : title,
            details : details,
            branch : branch,
            social : social,
            image : {
                url : result.secure_url,
                public_id : result.public_id
            }
        });

        res.status(201).json({
            success : true,
            message : "Gallery Image created successfully !",
            gallery 
        });

    } catch (error) {
        return next( new ErrorHandler(error) )
    }
};

exports.galleryUpdate = async (req, res, next) => {
    try {
        const {id} = req.params;

        const isGalleryExist = await Gallery.findById(id);

        if(!isGalleryExist){
            return next( new ErrorHandler("Gallery does not found or deleted !", 404))
        };

        let image;

        if (req.body.image.includes("data:image")) {
            await cloudinary.uploader.destroy(isGalleryExist.image.public_id);

            let result = await cloudinary.uploader.upload(req.body.image, {
                folder : "gallery"
            });
            image = {
                public_id: result.public_id,
                url: result.secure_url
            }
        } else {
            image = {
                public_id: isGalleryExist.image.public_id,
                url: isGalleryExist.image.url
            }
        }

        req.body.image = image;

        const updatedGallery = await Gallery.findByIdAndUpdate(id, req.body);
        const galleries = await Gallery.find();

        res.status(200).json({
            success : true,
            message : `${updatedGallery.title} updated successfully !`,
            gallery : updatedGallery,
            galleries : galleries
        })

    } catch (error) {
        return next( new ErrorHandler(error) )
    }
}

exports.galleryDetails = async (req, res, next ) => {
    try {
        
        const gallery = await Gallery.findById(req.params.id);

        if( !gallery ){
            return ErrorHandler("Gallery details not found !", 404);
        };

        res.status(200).json({
            success : true,
            message : "",
            gallery
        })
    } catch (error) {
        return next( new ErrorHandler(error))
    }
};

exports.galleriesDetails = async (req, res, next ) => {
    try {
        const galleries = await Gallery.find();

        res.status(200).json({
            success : true,
            message : "",
            galleries
        })
    } catch (error) {
        return ErrorHandler(error)
    }
}

exports.galleryDelete = async (req, res, next) => {
    try {
        const {id} = req.params;

        const isGalleryExist = await Gallery.findById(id);

        if(!isGalleryExist){
            return next( new ErrorHandler("Gallery not found !", 404) )
        };

        await cloudinary.uploader.destroy(isGalleryExist.image.public_id);

        await Gallery.findByIdAndDelete(isGalleryExist._id)

        const galleries = await Gallery.find();

        res.status(200).json({
            success : true,
            message : "Gallery deleted successfully !",
            galleries : galleries
        });

    } catch (error) {
        return ErrorHandler(error)
    }
}