import express from "express";
import {
  createOrderBoxCtrl,
  deleteOrderBoxCtrl,
  getAllOrderBoxesCtrl,
  getOneOrderBoxCtrl,
  updateOrderBoxCtrl,
} from "../controllers/orderBoxController.js";

const oredreBoxRouter = express.Router();

oredreBoxRouter.get("/", getAllOrderBoxesCtrl);
oredreBoxRouter.post("/add-orderBox", createOrderBoxCtrl);
oredreBoxRouter.get("/:id", getOneOrderBoxCtrl);
oredreBoxRouter.put("/:id", updateOrderBoxCtrl);
oredreBoxRouter.delete("/:id/delete", deleteOrderBoxCtrl);

export default oredreBoxRouter;
