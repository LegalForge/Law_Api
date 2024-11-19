import { Router } from "express";
import { getProfile,getUserCases,getUserQuiz,loginUser,logoutUser,registerUser,updateProfile } from "../controllers/user.js";
import { userAvaterUpload } from "../middlewares/upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";

// Create router
const userRouter = Router();

// Define routes
userRouter.post("/users/register",registerUser);

userRouter.post("/users/login", loginUser);

userRouter.get("/users/me",isAuthenticated,hasPermission('get_profile'), getProfile);

userRouter.get("/users/me/cases",  isAuthenticated,getUserCases);

userRouter.get("/users/me/quizzes",  isAuthenticated,getUserQuiz);

userRouter.post("/users/logout",isAuthenticated,logoutUser);

userRouter.patch("/users/me", isAuthenticated, hasPermission('update_profile'), userAvaterUpload.single('avatar'), updateProfile);

// export Router
export default userRouter;