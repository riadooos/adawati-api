import express from "express";
import {
  createEntreeCtrl,
  deleteEntreeCtrl,
  getAllEntreesCtrl,
  getOneEntreeCtrl,
  updateEntreeCtrl,
} from "../controllers/entreeControllers.js";

const entreeRouter = express.Router();

entreeRouter.post("/add-entree", createEntreeCtrl);
entreeRouter.get("/", getAllEntreesCtrl);
entreeRouter.get("/:id", getOneEntreeCtrl);
entreeRouter.put("/:id", updateEntreeCtrl);
entreeRouter.delete("/:id/delete", deleteEntreeCtrl);

export default entreeRouter;
