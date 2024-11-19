import { QuizModel } from "../models/quiz.js";
import { addQuizValidator, updateQuizValidator } from "../validators/quiz.js";


// Add a new quiz 
export const addQuiz = async (req, res, next)=> {
    try {
        const { error, value } = addQuizValidator.validate({
            ...req.body
        });
        if (error) {
            return res.status(422).json(error);
        } 
        
        await QuizModel.create({
            ...value,
            user: req.auth.id
        });

      return res.status(201).json(value);
    } catch (error) {
      next(error);  
    }
};

//  get all quizzes 
export const getAllQuiz = async (req,res,next)=>{
    try {
        // Fetch all Adverts from database
        const allQuiz = await QuizModel.find(req.query);
      // return response
        res.status(200).json(allQuiz);  
    } catch (error) {
       next(error);
    }
};

export const countQuiz = async (req, res, next) => {

    try {
        const { filter = "{}" } = req.query

        // Count case in database
        const count = await QuizModel.countDocuments(JSON.parse(filter));

        // Respond to request
        res.json({ count });
    } catch (error) {
        next(error);
    }
};

// Get details of one quiz
export const getOneQuiz = async (req,res,next)=>{
    try {
        const oneQuiz = await QuizModel.findById(req.params.id);
        res.status(200).json(oneQuiz);
    } catch (error) {
        next(error)
    }
};

// Update a quiz
export const updateQuiz = async(req,res,next)=>{
try {
    const  { error, value } = updateQuizValidator.validate({
        ...req.body
    });

    if (error) {
        return res.status(422).json(error);
    }
    
    
    const quizUpdate= await QuizModel.findOneAndUpdate({
        _id:req.params.id,
        user: req.auth.id}, value, {new: true});

        if (!quizUpdate){
            return res.status(404).json('Ad not found')
            }
   return res.status(200).json(value);
} catch (error) {
    next(error);
}
}

// Delete quiz
export const deleteQuiz = async(req,res,next)=>{
    try {
       const quizDelete = await QuizModel.findOneAndDelete({
        _id:req.params.id,
        user: req.auth.id});
        if (!quizDelete){
            return res.status(404).json('Advert not deleted !')
            }
       return res.status(200).json('Quiz deleted successfully!');
    } catch (error) {
        next(error);
    }
};
