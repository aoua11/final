const Joi = require('joi');


exports.store = {
    name : Joi.string().required(),
    number : Joi.number().positive().required(),
    email : Joi.string().email().required(),
    password : Joi.string().required()
};