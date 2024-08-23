const Joi = require('joi');


exports.store = {
    title : Joi.string().required(),
    price : Joi.number().positive().required(),
    description : Joi.string().required(),
    category : Joi.string(),
    
};