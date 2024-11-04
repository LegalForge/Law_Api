import { Router } from "express";
import { getProfile,getUserCases,loginUser,logoutUser,registerUser,updateProfile } from "../controllers/user.js";

// Create router
const userRouter = Router();

// Define routes
userRouter.post("/users/register",registerUser);

userRouter.post("/users/login", loginUser);

userRouter.get("/users/me", getProfile);

userRouter.get("/users/me/cases",  getUserCases);

userRouter.post("/users/logout",logoutUser);

userRouter.patch("/users/me",  userAvaterUpload.single('avatar'), updateProfile);

// export Router
export default userRouter;