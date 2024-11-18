import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const  localUpload = multer({ dest: "uploads/"});

export const caseContentUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: "/law-api/cases/*"
    }),
    preservePath: true
})

export const /*remoteUpload*/ userAvaterUpload = multer({
    storage: multerSaveFilesOrg({
      apiAccessToken: process.env.SAVEFILESORG_API_KEY,
      relativePath: "/law-api/users/*",
    }),
    preservePath: true
  });
