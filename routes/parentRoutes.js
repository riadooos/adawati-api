import express from "express";
import {
  createParentCtrl,
  deleteParentCtrl,
  getAllParentsCtrl,
  getOneParentCtrl,
  updateParentCtrl,
} from "../controllers/parentController.js";

const parentRouter = express.Router();

parentRouter.get("/", getAllParentsCtrl);
parentRouter.post("/add-parent", createParentCtrl);
parentRouter.get("/:id", getOneParentCtrl);
parentRouter.put("/:id", updateParentCtrl);
parentRouter.delete("/:id/delete", deleteParentCtrl);

export default parentRouter;
