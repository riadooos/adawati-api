import express from "express";
import {
  createBoxCtrl,
  deleteBoxCtrl,
  getAllBoxesCtrl,
  getOneBoxCtrl,
  updateBoxCtrl,
} from "../controllers/boxController.js";

const boxRouter = express.Router();

boxRouter.get("/", getAllBoxesCtrl);
boxRouter.post("/add-box", createBoxCtrl);
boxRouter.get("/:id", getOneBoxCtrl);
boxRouter.put("/:id", updateBoxCtrl);
boxRouter.delete("/:id/delete", deleteBoxCtrl);

export default boxRouter;
