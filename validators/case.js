import Joi from "joi";

export const addCaseValidator = Joi.object({
    title: Joi.string().required(), 
    summary: Joi.string().required(),
    citation: Joi.string().required(),
    icon: Joi.string().required()
})

export const updateCaseValidator = Joi.object({
    title: Joi.string(), 
    summary: Joi.string(),
    citation: Joi.string(),
    icon: Joi.string()
})