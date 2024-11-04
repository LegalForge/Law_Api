import { Router } from "express";
import { addCase, deleteCase, getCases, getOneCase, updateCase } from "../controllers/case.js";

//create a router
const caseRouter = Router();

// Define routes
caseRouter.post('/cases', addCase);
caseRouter.get('/cases', getCases);
caseRouter.get('/books/:id', getOneCase);
caseRouter.patch('/cases/:id', updateCase);
caseRouter.delete('/cases/:id', deleteCase);

// export router
export default caseRouter;