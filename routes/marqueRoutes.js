import express from "express";
import {
  createMarqueCtrl,
  deleteMarque,
  getAllMarques,
  getOneMarque,
  updateMarque,
} from "../controllers/marqueControllers.js";
import marqueFileUpload from "../config/marqueImgUpload.js";

const marqueRouter = express.Router();

marqueRouter.get("/", getAllMarques);
marqueRouter.post(
  "/add-marque",
  marqueFileUpload.single("imgMarque"),
  createMarqueCtrl
);
marqueRouter.get("/:id", getOneMarque);
marqueRouter.put("/:id", updateMarque);
marqueRouter.delete("/:id/delete", deleteMarque);

export default marqueRouter;
