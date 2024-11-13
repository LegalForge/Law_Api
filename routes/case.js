import { Router } from "express";
import { addCase, countCases, deleteCase, getCases, getOneCase, updateCase } from "../controllers/case.js";
import { caseIconUpload } from "../middlewares/upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";

//create a router
const caseRouter = Router();

// Define routes
caseRouter.post('/cases', isAuthenticated,hasPermission('add_case'), caseIconUpload.single("icon"),addCase);

caseRouter.get('/cases', getCases);

caseRouter.get("/cases/count", isAuthenticated,hasPermission('count_case'), countCases);

caseRouter.get('/cases/:id', getOneCase);

caseRouter.patch('/cases/:id', isAuthenticated, hasPermission( 'update_case'), caseIconUpload.single("icon"),updateCase);

caseRouter.delete('/cases/:id', isAuthenticated, hasPermission('delete_case'), deleteCase);

// export router
export default caseRouter;