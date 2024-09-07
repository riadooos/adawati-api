import express from "express";
import {
  createArticleCtrl,
  deleteArticleCtrl,
  getAllArticlesCtrl,
  getOneArticleCtrl,
  updateArticleCtrl,
} from "../controllers/articleController.js";
import articleFileUpload from "../config/articleImgUpload.js";

const articleRouter = express.Router();

articleRouter.get("/", getAllArticlesCtrl);
articleRouter.post(
  "/add-article",
  articleFileUpload.single("imgArticle"),
  createArticleCtrl
);
articleRouter.get("/:id", getOneArticleCtrl);
articleRouter.put("/:id", updateArticleCtrl);
articleRouter.delete("/:id/delete", deleteArticleCtrl);

export default articleRouter;
