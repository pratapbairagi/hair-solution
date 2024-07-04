const ErrorHandler = require("../middleware/errorHandler");
const Client = require("../model/client");


exports.clientCreate = async (req, res, next) => {
    try {
        const {name, email, number, age, gender} = req.body;

        if( !name || !email || !number || age || !gender ){
            return next( new ErrorHandler("name, email, number,age and gender details are required !", 400))
        };

        const isClientExistWithEmail = await Client.findOne({email});
        const isClientExistWithNumber = await Client.findOne({number});

        if(isClientExistWithEmail){
            return next( new ErrorHandler("Client with this email already exists", 400))
        };

        if(isClientExistWithNumber){
            return next( new ErrorHandler("Client with this number already exists", 400))
        };

        const client = await Client.create({
            name,
            email,
            number,
            age,
            gender
        });

        res.status(201).json({
            success : true,
            message : "Client added successfully !",
            client : client
        })

    } catch (error) {
        return next( new ErrorHandler(error))
    }
}

exports.clientUpdate = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}

exports.addPurchase = async (req, res, next) => {
    try {
        const {id} = req.params;
        const { productId, productName, amount } = req.body;

        const isClientExist = await Client.findById(id);

        if( !isClientExist){
            return next( new ErrorHandler("Client does not exist or deleted !", 404))
        };

        isClientExist.productsPurchased.push({
            productId,
            productName,
            amount
        })

       await isClientExist.save();

       res.status(200).json({
        success : true,
        message : "Product added successfully !",
        client : isClientExist
       })
    } catch (error) {
        return next( new ErrorHandler(error))
    }
}

exports.addService = async (req, res, next) => {
    try {
        const {id} = req.params;
        const { serviceId, serviceName, amount } = req.body;

        const isClientExist = await Client.findById(id);

        if( !isClientExist){
            return next( new ErrorHandler("Client does not exist or deleted !", 404))
        };

        isClientExist.servicesTaken.push({
            serviceId,
            serviceName,
            amount
        })

       await isClientExist.save();

       res.status(200).json({
        success : true,
        message : "Service added successfully !",
        client : isClientExist
       })

    } catch (error) {
        return next( new ErrorHandler(error))
    }
}