import express from "express";
import fournisseurFileUpload from "../config/fournisseurImgUpload.js";
import {
  createFournisseurCtrl,
  deleteFournisseurCtrl,
  getAllFournisseursCtrl,
  getOneFournisseurCtrl,
  updateFournisseurCtrl,
} from "../controllers/fornisseurController.js";

const fournisseurRouter = express.Router();

fournisseurRouter.get("/", getAllFournisseursCtrl);
fournisseurRouter.post(
  "/add-fournisseur",
  fournisseurFileUpload.single("imgFournisseur"),
  createFournisseurCtrl
);
fournisseurRouter.get("/:id", getOneFournisseurCtrl);
fournisseurRouter.put("/:id", updateFournisseurCtrl);
fournisseurRouter.delete("/:id/delete", deleteFournisseurCtrl);

export default fournisseurRouter;
