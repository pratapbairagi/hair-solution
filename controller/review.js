const ErrorHandler = require("../middleware/errorHandler");
const Client = require("../model/client");
const Product = require("../model/products");
const Review = require("../model/review")


exports.addUpdateReview = async (req, res, next) => {
    try {
        const { rating, review, clientId, entityType, entityId, entityName } = req.body;

        const isProductExist = await Product.findOne({ title: entityName });

        if (!isProductExist) {
            return next(new ErrorHandler(`${entityName} : is not available or deleted .`, 404))
        }

        const isClientExist = await Client.findById(clientId);

        if (!isClientExist) {
            return next(new ErrorHandler(` Your details are is not available or deleted .`, 404))
        }
        let newReview;

        const isReviewExist = await Review.findOne({ clientId: isClientExist._id, entityName: entityName });

        if (isReviewExist) {
            isReviewExist.rating = rating;
            isReviewExist.reviewText = review;
            isReviewExist.entityImage = isProductExist.image.url;

            newReview = await isReviewExist.save()
        }
        if (!isReviewExist) {
            newReview = await Review.create({
                rating,
                reviewText: review,
                clientId: isClientExist._id,
                clientName: isClientExist.name,
                entityName: entityName,
                entityId: isProductExist._id,
                entityType: entityType === "servicesTaken" ? "service" : "product",
                entityImage: isProductExist.image.url
            });
        }

        let entity;

        entity = isClientExist[entityType]
        entity = entity.map(v => v._id.toString() === entityId.toString() ? { ...v, review: true } : v)

        isClientExist[entityType] = entity;

        await isClientExist.save();

        res.status(201).json({
            success: true,
            message: "",
            review: newReview
        })


    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.reviews = async (req, res, next) => {
    try {
        const { search = "", page = 1 } = req.query;
        let query = {};

        let limitReviewsPerPage = 10;
        let skipPage = (page - 1) * limitReviewsPerPage;

        let totalReviewsNumber = 0

        if (search.length > 0) {
            query = {
                $or: [
                    { clientName: { $regex: search, $options: "i" } },
                    { entityName: { $regex: search, $options: "i" } }
                ]
            }
        }

        let reviews;
        if (search.length === 0) {
            totalReviewsNumber = await Review.countDocuments()
            reviews = await Review.find().limit(limitReviewsPerPage).skip(skipPage);
        }
        else {
            totalReviewsNumber = await Review.countDocuments(query)
            reviews = await Review.find(query).limit(limitReviewsPerPage).skip(skipPage);
        }

        res.status(200).json({
            success: true,
            message: "",
            reviews,
            totalReviewsNumber
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}