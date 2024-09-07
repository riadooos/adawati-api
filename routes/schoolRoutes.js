import express from "express";
import {
  createSchoolCtrl,
  deleteSchoolCtrl,
  getAllSchoolsCtrl,
  getOneSchoolCtrl,
  updateSchoolCtrl,
} from "../controllers/schoolControllers.js";
import schoolFileUpload from "../config/schoolImgUpload.js";

const schoolRouter = express.Router();

schoolRouter.get("/", getAllSchoolsCtrl);
schoolRouter.post(
  "/add-school",
  schoolFileUpload.single("schoolLogo"),
  createSchoolCtrl
);
schoolRouter.get("/:id", getOneSchoolCtrl);
schoolRouter.put("/:id", updateSchoolCtrl);
schoolRouter.delete("/:id/delete", deleteSchoolCtrl);

export default schoolRouter;
