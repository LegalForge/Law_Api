
import { Schema, Types, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const optionSchema = new Schema({
    text: String,
    isCorrect: Boolean  
});

const questionSchema = new Schema({
    questionText: { type: String, required: true },
    options: [optionSchema],
    correctAnswer: { type: String, required: true },
    explanation: {type:String},
    points: { type: Number, default: 5 }
});

const quizSchema = new Schema({
    title: { type: String, required: true },
description: {type: String},
    category:{ type: String},
    difficulty: { type: String, enum: ["easy", "medium", "hard"], default: "medium" },
    questions: [questionSchema],
timeLimit: {type: Number},  // in seconds, if needed
    totalPoints: {type: Number},
    passingScore: {type: Number},
    user:{type:Types.ObjectId, required: true, ref: 'User' },
    
},
{
    timestamps: true
});

quizSchema.plugin(toJSON);

export const QuizModel = model('Quiz', quizSchema);