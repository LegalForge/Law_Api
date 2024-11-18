// import { create } from "domain";
import { CaseModel } from "../models/case.js";
import { addCaseValidator, updateCaseValidator } from "../validators/case.js";

// Add a new case
export const addCase = async (req, res, next) => {
    try {
        //   const casePost = await create(req.body);

        //Validate user input
        const { error, value } = addCaseValidator.validate({
            ...req.body,
            content: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error);
        }
        // write todo to database
        await CaseModel.create({
            ...value,
            user: req.auth.id
        });


        res.status(201).json(value);
    } catch (error) {
        next(error);
    }
};

// Get all cases
export const getCases = async (req, res, next) => {
    try {
        // const cases = await find(req.body);
        const { filter = "{}", sort = "{}", limit = 10,
            skip = 0 } = req.query;
        // Fetch all Cases from database
        const cases = await CaseModel.find(JSON.parse(filter)).sort(JSON.parse(sort)).limit(limit).skip(skip);
        // return response
        res.status(200).json(cases);
    }
    catch (error) {
        next(error);
    }
};

export const countCases = async (req, res, next) => {

    try {
        const { filter = "{}" } = req.query
        // Count case in database
        const count = await CaseModel.countDocuments(JSON.parse(filter));
        // Respond to request
        res.json({ count });
    } catch (error) {
        next(error);
    }
};

// Get details of a case by Id
export const getOneCase = async (req, res, next) => {
    try {
        const oneCase = await CaseModel.findById(req.params.id);
        res.status(200).json(oneCase)
    } catch (error) {
        next(error);
    }
};

// Update a case details 
export const updateCase = async (req, res, next) => {
    try {

        const { error, value } = updateCaseValidator.validate({
            ...req.body,
            content: req.file?.filename
        });

        if (error) {
            return res.status(422).json(error);
        }

        const caseUpdate = await CaseModel.findOneAndUpdate({
            _id: req.params.id,
            user: req.auth.id
        }, value, { new: true });

        if (!caseUpdate) {
            return res.status(404).json('Case not found')
        }
        return res.status(200).json(value);
    } catch (error) {
        next(error);
    }
}
// Delete a case by Id
export const deleteCase = async (req, res, next) => {
    try {
        const caseDelete = await CaseModel.findOneAndDelete({
            _id: req.params.id,
            user: req.auth.id
        });

        if (!caseDelete) {
            return res.status(404).json('Case not deleted !')
        }

        return res.status(200).json('Case deleted successfully!');
    }
    catch (error) {
        next(error);
    }
};