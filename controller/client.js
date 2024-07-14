const ErrorHandler = require("../middleware/errorHandler");
const Client = require("../model/client");
const Product = require("../model/products");
const sendVerificationEmail = require("../utils/sendVerificationEmail");

exports.allClients = async (req, res, next) => {
    try {
        const { search, page } = req.query;

        let limitProductsPerPage = 10;
        let skipPage = (page - 1 ) * limitProductsPerPage

        let query = {};

        if (search.length > 0) {
            if (isNaN(search)) {
                query.name = { $regex: search, $options: "i" }
            }
            else {
                query.number = search
            }
        }

        let clients;

        let totalClientsNumber = 0

        if (search && search.length > 0) {
            totalClientsNumber = await Client.countDocuments(query)
            clients = await Client.find(query).select("-productsPurchased -servicesTaken").limit(limitProductsPerPage).skip(skipPage)
        }
        else if(search.length === 0 ) {
            totalClientsNumber = await Client.countDocuments(query)
            clients = await Client.find().select("-productsPurchased -servicesTaken").limit(limitProductsPerPage).skip(skipPage)
        }

        res.status(200).json({
            success: true,
            message: "",
            clients: clients,
            totalClientsNumber : totalClientsNumber
        })
    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.singleClient = async (req, res, next) => {
    try {
        const { id } = req.params;

        const isClientExist = await Client.findById(id);

        if (!isClientExist) {
            return next(new ErrorHandler("Client does not exist or deleted !", 404))
        };

        res.status(200).json({
            success: true,
            message: "",
            client: isClientExist
        });

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.clientCreate = async (req, res, next) => {
    // const istDateTime = moment().tz('Asia/Kolkata').toDate();

    try {
        const { name, email, number, age, gender } = req.body;

        if (!name || !email || !number || !age || !gender) {
            return next(new ErrorHandler("name, email, number,age and gender details are required !", 400))
        };

        const isClientExistWithEmail = await Client.findOne({ email });
        const isClientExistWithNumber = await Client.findOne({ number });

        if (isClientExistWithEmail) {
            return next(new ErrorHandler("Client with this email already exists", 400))
        };

        if (isClientExistWithNumber) {
            return next(new ErrorHandler("Client with this number already exists", 400))
        };

        const client = await Client.create({
            name,
            email,
            number: Number(number),
            age: Number(age),
            gender,
            createdAt : new Date()
        });

        res.status(201).json({
            success: true,
            message: "Client added successfully !",
            client: client
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.clientUpdate = async (req, res, next) => {
    try {
        const { name, email, number, age, gender } = req.body;
        const { id } = req.params;

        const isClientExistWithId = await Client.findById(id);

        if (!isClientExistWithId) {
            return next(new ErrorHandler("Client does not exist or deleted", 404))
        };

        isClientExistWithId.name = name;
        isClientExistWithId.email = email;
        isClientExistWithId.age = Number(age);
        isClientExistWithId.number = Number(number);
        isClientExistWithId.gender = gender;

        const client = await isClientExistWithId.save();

        res.status(201).json({
            success: true,
            message: "Client added successfully !",
            client: client
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}


exports.clientDelete = async (req, res, next) => {
    try {
        let limitProductsPerPage = 10;

        const { id } = req.params;

        const isClientExist = await Client.findById(id);

        if (!isClientExist) {
            return next(new ErrorHandler("Client does not exist or deleted !", 404))
        };

        await Client.findByIdAndDelete(id);

        const clients = await Client.find().limit(limitProductsPerPage);

        res.status(200).json({
            success: true,
            message: "Client deleted successfully !",
            clients: clients
        })
    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.addPurchase = async (req, res, next) => {
    // const istDateTime = moment().tz('Asia/Kolkata').toDate();
    try {

        const { id } = req.params;
        const { productName, amount, other } = req.body;

        const isClientExist = await Client.findById(id);

        if (!isClientExist) {
            return next(new ErrorHandler("Client does not exist or deleted !", 404))
        };

        let product = await Product.findOne({ title: productName })

        isClientExist.productsPurchased.push({
            productId: product._id,
            productName: productName,
            amount: Number(amount),
            other: other,
            purchaseDate : new Date()
        })

        isClientExist.totalPurchase = (isClientExist.totalPurchase + 1);

        await isClientExist.save();

        res.status(200).json({
            success: true,
            message: "Product added successfully !",
            client: isClientExist
        })
    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.products = async (req, res, next) => {
    try {
        const { type } = req.query;

        const products = await Product.find({ type_: type }).select("-image -description -gender -types -sizes -colors -createdAt -branch");

        res.status(200).json({
            success: true,
            message: "",
            products
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.updatePurchase = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { _id } = req.body;

        const isClientExist = await Client.findById(id);

        if (!isClientExist) {
            return next(new ErrorHandler("client does not exist or deleted !", 404));
        }

        let productsPurchased;
        productsPurchased = await isClientExist.productsPurchased.map(v => v._id.toString() === _id.toString() ? req.body : v)

        isClientExist.productsPurchased = productsPurchased;

        await isClientExist.save();

        res.status(200).json({
            success: true,
            message: "Product purchased detail updated successfully !",
            client: isClientExist
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.deletePurchase = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { _id } = req.body;

        const isClientExist = await Client.findById(id);

        if (!isClientExist) {
            return next(new ErrorHandler("client does not exist or deleted !", 404));
        }

        let productsPurchased;
        productsPurchased = await isClientExist.productsPurchased.filter(v => v._id.toString() !== _id.toString() )

        isClientExist.productsPurchased = productsPurchased;

        isClientExist.totalPurchase = (isClientExist.totalPurchase - 1);

        await isClientExist.save();

        res.status(200).json({
            success: true,
            message: "Product purchased detail updated successfully !",
            client: isClientExist
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.addService = async (req, res, next) => {
    // const istDateTime = moment().tz('Asia/Kolkata').toDate();
    try {
        const { id } = req.params;
        const { serviceId, serviceName, amount, other } = req.body;

        const isClientExist = await Client.findById(id);

        if (!isClientExist) {
            return next(new ErrorHandler("Client does not exist or deleted !", 404))
        };

        const service = await Product.findOne({ title: serviceName });

        isClientExist.servicesTaken.push({
            serviceId: service._id,
            serviceName: serviceName,
            amount: Number(amount),
            other: other,
            serviceDate : new Date()
        });

        isClientExist.totalService = (isClientExist.totalService + 1)

        await isClientExist.save();

        res.status(200).json({
            success: true,
            message: "Service added successfully !",
            client: isClientExist
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.updateTakenService = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { _id } = req.body;

        const isClientExist = await Client.findById(id);

        if (!isClientExist) {
            return next(new ErrorHandler("client does not exist or deleted !", 404));
        }

        let serviceTaken;
        serviceTaken = await isClientExist.servicesTaken.map(v => v._id.toString() === _id.toString() ? req.body : v)

        isClientExist.servicesTaken = serviceTaken;

        await isClientExist.save();

        res.status(200).json({
            success: true,
            message: "Taken service detail updated successfully !",
            client: isClientExist
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.deleteTakenService = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { _id } = req.body;

        const isClientExist = await Client.findById(id);

        if (!isClientExist) {
            return next(new ErrorHandler("client does not exist or deleted !", 404));
        }

        let serviceTaken;
        serviceTaken = await isClientExist.servicesTaken.filter(v => v._id.toString() !== _id.toString() )

        isClientExist.servicesTaken = serviceTaken;

        isClientExist.totalService = (isClientExist.totalService - 1)

        await isClientExist.save();

        res.status(200).json({
            success: true,
            message: "Taken service detail updated successfully !",
            client: isClientExist
        })

    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.reviewMail = async (req, res, next) => {
    try {
        const {clientId} = req.params;
        const {type, entityId} = req.body;

        // console.log("clintId", clientId)

        const isClientExist = await Client.findById(clientId);

        if (!isClientExist) {
            return next(new ErrorHandler("Client does not exist or deleted !", 404))
        };
        let isEntityTaken;

        isEntityTaken = await isClientExist[type].find(v=> v._id.toString()  === entityId);

        if( !isEntityTaken ){
            return next(new ErrorHandler("Client is not eligible to review this entity !", 400))
        }

        let isProductExist
        if(type === "servicesTaken"){
             isProductExist = await Product.findOne({title : isEntityTaken.serviceName })
        }
        else{
            isProductExist = await Product.findOne({title : isEntityTaken.productName })
        }

        if( !isProductExist){
            return next(new ErrorHandler("Can not give review as the product or service is not available or deleted !", 400))
        }

        await sendVerificationEmail({
            type:"review",
            email : isClientExist.email, 
            client : { 
                clientName : isClientExist.name, 
                clientId : isClientExist._id, 
                entityType : type, 
                entityId : isEntityTaken._id,
                entityOther : isEntityTaken.other.join(","),
                entityAmount : isEntityTaken.amount,
                entityTakenDate : type === "servicesTaken" ? isEntityTaken.serviceDate : isEntityTaken.purchaseDate,
                entityName : isProductExist.title,
                entityImage : isProductExist.image.url
            }
        });

        let entity;
        entity = isClientExist[type]
        entity = entity.map(v=> v._id.toString() === entityId.toString() ? {...v, mailSent : v.mailSent+1 } : v)

        isClientExist[type] = entity;

        await isClientExist.save();

        res.status(200).json({
            success : true,
            message : `Mail sent to client : ${isClientExist.name} `,
            client : isClientExist
        })


    } catch (error) {
        return next(new ErrorHandler(error))
    }
}
