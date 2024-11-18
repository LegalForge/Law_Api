import Joi from "joi";

// Define Joi schema for the quiz
export const addQuizValidator = Joi.object({

    title: Joi.string().required().messages({
        'string.empty': 'Title is required'
    }),
    description: Joi.string().max(500).messages({
        'string.max': 'Description should be at most 500 characters'
    }),
    questions: Joi.array().items(
        Joi.object({
            questionText: Joi.string().required().messages({
                'string.empty': 'Each question must have text'
            }),
            options: Joi.array().min(2).required().messages({
                'array.min': 'Each question should have at least 2 options'
            }),
            correctAnswer: Joi.string().required().messages({
                'string.empty': 'Each question must have a correct answer'
            })
        })
    ).required().messages({
        'array.base': 'Questions should be an array'
    }),
    timeLimit: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Time limit should be a positive integer'
    }),
    passingScore: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Passing score should be a positive integer'
    })
});

export const updateQuizValidator = Joi.object({

    title: Joi.string().messages({
        'string.empty': 'Title is required'
    }),
    description: Joi.string().max(500).messages({
        'string.max': 'Description should be at most 500 characters'
    }),
    questions: Joi.array().items(
        Joi.object({
            questionText: Joi.string().messages({
                'string.empty': 'Each question must have text'
            }),
            options: Joi.array().min(2).messages({
                'array.min': 'Each question should have at least 2 options'
            }),
            correctAnswer: Joi.string().messages({
                'string.empty': 'Each question must have a correct answer'
            })
        })
    ).messages({
        'array.base': 'Questions should be an array'
    }),
    timeLimit: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Time limit should be a positive integer'
    }),
    passingScore: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Passing score should be a positive integer'
    })
});
