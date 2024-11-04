import { create } from "domain";

// Add new case
export const addCase = async(req,res,next)=>{
    try {
      const casePost = await create(req.body);
      res.status(201).json(casePost); 
    } catch (error) {
        next(error);
    }
}

// Get all cases
export const getCases = async(req,res,next)=> {
    try {
     const cases = await find(req.body);
        res.status(200).json(cases)
    } catch (error) {
      next(error)  
    }
}

// Get details of a book by Id
export const getOneCase = async (req,res,next)=> {
    try {
      const oneCase = await findById(req.params.id);
      res.status(200).json(oneCase)
    } catch (error) {
       next(error); 
    }
}

// Update a case details by Id
export const updateCase = async (req,res,next)=>{
    try {
        const caseUpdate = await findByIdAndUpdate(req.params.id);
        res.status(200).json(caseUpdate);
    } catch (error) {
        next(error)
    }
}
// Delete a book by Id
export const deleteCase = async (req, res, next) => {
try {
    const caseDelete = await findByIdAndDelete(req.params.id);
    res.status(200).json(caseDelete);
} catch (error) {
    next(error);
}
}