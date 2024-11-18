import { Router } from "express";
import { addQuiz, countQuiz, deleteQuiz, getAllQuiz, getOneQuiz, updateQuiz } from "../controllers/quiz.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";


// create a router
const quizRouter = Router();

// define routes
quizRouter.post('/quizzes', isAuthenticated,hasPermission('add_quiz'),addQuiz );

quizRouter.get('/quizzes', getAllQuiz);

quizRouter.get("/quizzes/count", isAuthenticated,hasPermission('count_quiz'), countQuiz);

quizRouter.get('/quizzes/:id', getOneQuiz);

quizRouter.patch('/quizzes/:id', isAuthenticated,hasPermission('update_quiz'), updateQuiz);

quizRouter.delete('/quizzes/:id',isAuthenticated,hasPermission('delete_quiz'),deleteQuiz);

// export router
export default quizRouter;