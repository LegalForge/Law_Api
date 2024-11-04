import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import caseRouter from "./routes/case.js";
import joi from "joi";

// create express app
const caseApp = express();

// connect to the database

// define middlewares
caseApp.use(cors());
caseApp.use(express.json());

// define routes
caseApp.use(caseRouter);

// listen for incoming requests
caseApp.listen(3004, function(){
    console.log('App is listenung on port 3004')
});