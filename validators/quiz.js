// import Joi from "joi";

// // Define Joi schema for the quiz
// export const addQuizValidator = Joi.object({

//     title: Joi.string().required().messages({
//         'string.empty': 'Title is required'
//     }),
//     description: Joi.string().max(500).messages({
//         'string.max': 'Description should be at most 500 characters'
//     }),
//     questions: Joi.array().items(
//         Joi.object({
//             questionText: Joi.string().required().messages({
//                 'string.empty': 'Each question must have text'
//             }),
//             options: Joi.array().min(2).required().messages({
//                 'array.min': 'Each question should have at least 2 options'
//             }),
//             correctAnswer: Joi.string().required().messages({
//                 'string.empty': 'Each question must have a correct answer'
//             })
//         })
//     ).required().messages({
//         'array.base': 'Questions should be an array'
//     }),
//     timeLimit: Joi.number().integer().min(1).optional().messages({
//         'number.base': 'Time limit should be a positive integer'
//     }),
//     passingScore: Joi.number().integer().min(1).optional().messages({
//         'number.base': 'Passing score should be a positive integer'
//     })
// });

// export const updateQuizValidator = Joi.object({

//     title: Joi.string().messages({
//         'string.empty': 'Title is required'
//     }),
//     description: Joi.string().max(500).messages({
//         'string.max': 'Description should be at most 500 characters'
//     }),
//     questions: Joi.array().items(
//         Joi.object({
//             questionText: Joi.string().messages({
//                 'string.empty': 'Each question must have text'
//             }),
//             options: Joi.array().min(2).messages({
//                 'array.min': 'Each question should have at least 2 options'
//             }),
//             correctAnswer: Joi.string().messages({
//                 'string.empty': 'Each question must have a correct answer'
//             })
//         })
//     ).messages({
//         'array.base': 'Questions should be an array'
//     }),
//     timeLimit: Joi.number().integer().min(1).optional().messages({
//         'number.base': 'Time limit should be a positive integer'
//     }),
//     passingScore: Joi.number().integer().min(1).optional().messages({
//         'number.base': 'Passing score should be a positive integer'
//     })
// });



import Joi from 'joi';

// Define Joi schema for the quiz
export const addQuizValidator = Joi.object({
    title: Joi.string().required().messages({
        'string.empty': 'Title is required',
    }),
    description: Joi.string().max(500).messages({
        'string.max': 'Description should be at most 500 characters',
    }),
    category: Joi.string().optional().messages({
        'string.empty': 'Category must be a string',
    }),
    difficulty: Joi.string().valid('easy', 'medium', 'hard').optional().messages({
        'any.only': 'Difficulty must be one of "easy", "medium", or "hard"',
    }),
    questions: Joi.array().items(
        Joi.object({
            questionText: Joi.string().required().messages({
                'string.empty': 'Each question must have text',
            }),
            options: Joi.array()
                .items(
                    Joi.object({
                        text: Joi.string().required().messages({
                            'string.empty': 'Option text is required',
                        }),
                        isCorrect: Joi.boolean().required().messages({
                            'boolean.base': 'Option "isCorrect" must be a boolean',
                        }),
                    })
                )
                .min(2)
                .required()
                .messages({
                    'array.min': 'Each question should have at least 2 options',
                }),
            correctAnswer: Joi.string().required().messages({
                'string.empty': 'Each question must have a correct answer',
            }),
            explanation: Joi.string().optional().messages({
                'string.empty': 'Explanation must be a string',
            }),
            points: Joi.number().integer().min(1).required().messages({
                'number.base': 'Points must be a positive integer',
            }),
        })
    ).required().messages({
        'array.base': 'Questions should be an array',
    }),
    timeLimit: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Time limit should be a positive integer',
    }),
    totalPoints: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Total points should be a positive integer',
    }),
    passingScore: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Passing score should be a positive integer',
    }),
});

// Define Joi schema for updating the quiz
export const updateQuizValidator = Joi.object({
    title: Joi.string().optional().messages({
        'string.empty': 'Title must be a string',
    }),
    description: Joi.string().max(500).optional().messages({
        'string.max': 'Description should be at most 500 characters',
    }),
    category: Joi.string().optional().messages({
        'string.empty': 'Category must be a string',
    }),
    difficulty: Joi.string().valid('easy', 'medium', 'hard').optional().messages({
        'any.only': 'Difficulty must be one of "easy", "medium", or "hard"',
    }),
    questions: Joi.array().items(
        Joi.object({
            questionText: Joi.string().optional().messages({
                'string.empty': 'Each question must have text',
            }),
            options: Joi.array()
                .items(
                    Joi.object({
                        text: Joi.string().required().messages({
                            'string.empty': 'Option text is required',
                        }),
                        isCorrect: Joi.boolean().required().messages({
                            'boolean.base': 'Option "isCorrect" must be a boolean',
                        }),
                    })
                )
                .min(2)
                .optional()
                .messages({
                    'array.min': 'Each question should have at least 2 options',
                }),
            correctAnswer: Joi.string().optional().messages({
                'string.empty': 'Each question must have a correct answer',
            }),
            explanation: Joi.string().optional().messages({
                'string.empty': 'Explanation must be a string',
            }),
            points: Joi.number().integer().min(1).optional().messages({
                'number.base': 'Points must be a positive integer',
            }),
        })
    ).optional().messages({
        'array.base': 'Questions should be an array',
    }),
    timeLimit: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Time limit should be a positive integer',
    }),
    totalPoints: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Total points should be a positive integer',
    }),
    passingScore: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Passing score should be a positive integer',
    }),
});
