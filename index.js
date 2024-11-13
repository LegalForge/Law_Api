import express from "express";
import mongoose from "mongoose";

import caseRouter from "./routes/case.js";
import userRouter from "./routes/user.js";
import cors from "cors";

// create express app
const caseApp = express();

// connect to the database
await mongoose.connect(process.env.MONGO_URI);

// define middlewares
caseApp.use(cors());
caseApp.use(express.json());

// define routes
caseApp.use(caseRouter);
caseApp.use(userRouter);

// listen for incoming requests
caseApp.listen(3004, function(){
    console.log('App is listenung on port 3004')
});