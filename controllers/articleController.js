import Article from "../models/Article.js";
import Category from "../models/Category.js";
import Marque from "../models/Marque.js";
import asyncHandler from "express-async-handler";

export const createArticleCtrl = asyncHandler(async (req, res) => {
  const { nameArticle, refArticle, categoryId, marqueId } = req.body;
  // view if article exist
  /*const refArticleExist = await Article.findOne({ refArticle });
  if (refArticleExist) {
    throw new Error("Article Already Exists");
  }*/

  //find the category
  const categoryFound = await Category.findById({ _id: categoryId });
  if (!categoryFound) {
    throw new Error(
      "Category not found, please create category first or check category name"
    );
  }

  //find the marque
  const marqueFound = await Marque.findById({
    _id: marqueId,
  });
  if (!marqueFound) {
    throw new Error(
      "Marque not found, please create marque first or check marque name"
    );
  }
  const article = await Article.create({
    nameArticle,
    refArticle,
    categoryId,
    marqueId,
    imgArticle: req?.file?.path,
  });
  //push the  product into category
  categoryFound.articles.push(article._id);
  //reseave
  await categoryFound.save();
  //push the  product into marque
  marqueFound.articles.push(article._id);
  //reseave
  await marqueFound.save();

  res.json({
    status: "success",
    message: "new article was created",
    article,
  });
});

export const getAllArticlesCtrl = asyncHandler(async (req, res) => {
  //query
  let articleQuery = Article.find();
  if (req.query.name) {
    articleQuery = articleQuery.find({
      articleName: { $regex: req.query.name, $options: "i" },
    });
  }
  //Filter by category
  /* if (req.query.category) {
    articleQuery = articleQuery.find({
      categoryId: { $regex: req.query.category, $options: "i" },
    });
  }
  //Filter by marque
  if (req.query.marque) {
    articleQuery = articleQuery.find({
      marqueId: { $regex: req.query.marque, $options: "i" },
    });
  }*/
  //Pagination
  //page
  const page = req.query.page ? parseInt(req.query.page) : 1; //если пользователь предоставляет страницу, вы можете использовать эту страницу.В противном случае мы будем использовать первую страницу.
  //limit
  const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 20;
  //startIdx
  const startIdx = (page - 1) * limit;
  //endIdx
  const endIdx = page * limit;
  //total
  const total = await Article.countDocuments();

  articleQuery = articleQuery.skip(startIdx).limit(limit);

  //pagination results
  const pagination = {};
  if (endIdx < total) {
    pagination.next = { page: page + 1, limit };
  }
  if (startIdx > 0) {
    pagination.prev = { page: page - 1, limit };
  }
  //await the query
  const articles = await articleQuery;
  res.json({
    status: "success",
    total,
    results: articles.length,
    pagination,
    message: "Articles fetched successfully",
    articles,
  });
});

export const getOneArticleCtrl = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) {
    throw new Error("article not found");
  }
  res.json({
    status: "success",
    message: "Article fetched successfully",
    article,
  });
});

export const updateArticleCtrl = asyncHandler(async (req, res) => {
  const { nameArticle, refArticle, category, marque } = req.body;
  //update
  const article = await Article.findByIdAndUpdate(
    req.params.id,
    {
      nameArticle,
      refArticle,
      category,
      marque,
    },
    { new: true }
  );

  res.json({
    status: "success",
    message: "Article updated successfully",
    article,
  });
});

export const deleteArticleCtrl = asyncHandler(async (req, res) => {
  const article = await Article.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    message: "Article deleted successfully",
    article,
  });
});
