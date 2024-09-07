import express from "express";
import {
  createCategoryCtrl,
  deleteCategory,
  getAllCategories,
  getOneCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import categoryFileUpload from "../config/categoryImgUpload.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.post(
  "/add-category",
  categoryFileUpload.single("imgCategory"),
  createCategoryCtrl
);
categoryRouter.get("/:id", getOneCategory);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id/delete", deleteCategory);

export default categoryRouter;
