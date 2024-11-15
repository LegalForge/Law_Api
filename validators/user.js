import Joi from "joi";

export const registerUserValidator =Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid('user','admin')
});

export const loginUserValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const updateProfileValidator = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
    level: Joi.string(),
    avatar: Joi.string()
});