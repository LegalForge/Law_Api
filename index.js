import express from "express";
import mongoose from "mongoose";

import caseRouter from "./routes/case.js";
import userRouter from "./routes/user.js";
import quizRouter from "./routes/quiz.js";
import cors from "cors";

// connect to the database
await mongoose.connect(process.env.MONGO_URI);

// create express app
const caseApp = express();

// define middlewares
caseApp.use(cors());
caseApp.use(express.json());

// define routes
caseApp.use(caseRouter);
caseApp.use(userRouter);
caseApp.use(quizRouter);

// listen for incoming requests
caseApp.listen(3004, () =>{
    console.log('App is listening on port 3004')
});