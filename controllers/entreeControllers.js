import asyncHandler from "express-async-handler";
import Entree from "../models/Entree.js";
import Article from "../models/Article.js";
import Fournisseur from "../models/Fournisseur.js";

export const createEntreeCtrl = asyncHandler(async (req, res) => {
  const { bon_Entree, article_id, qte_e, pu_e, fournisseur_id } = req.body;

  const articleFound = await Article.findById({ _id: article_id });
  if (!articleFound) {
    throw new Error("article not found, please create one!");
  }

  const fournisseurFound = await Fournisseur.findById({ _id: fournisseur_id });
  if (!fournisseurFound) {
    throw new Error("fournisseur not found, please create one!");
  }

  const entree = await Entree.create({
    bon_Entree,
    article_id,
    qte_e,
    pu_e,
    fournisseur_id,
  });

  //push the  entree into article
  articleFound.entrees.push(entree._id);
  //reseave
  await articleFound.save();

  //push the  entree into fournisseur
  fournisseurFound.entrees.push(entree._id);
  //reseave
  await fournisseurFound.save();

  res.json({
    status: "success",
    message: "Entree created successfully",
    entree,
  });
});

export const getAllEntreesCtrl = asyncHandler(async (req, res) => {
  //query
  let entreeQuery = Entree.find();
  if (req.query.bon_Entree) {
    entreeQuery = entreeQuery.find({
      bon_Entree: { $regex: req.query.bon_Entree, $options: "i" },
    });
  }

  //await the query
  const entrees = await entreeQuery;
  res.json({
    status: "success",
    results: entrees.length,
    message: "Entrees fetched successfully",
    entrees,
  });
});

export const getOneEntreeCtrl = asyncHandler(async (req, res) => {
  const entree = await Entree.findById(req.params.id);
  res.json({
    status: "success",
    message: "Entree fetched successfully",
    entree,
  });
});

export const updateEntreeCtrl = asyncHandler(async (req, res) => {
  const { bon_Entree, article_id, qte_e, pu_e, fournisseur_id } = req.body;
  //update
  const entree = await Entree.findByIdAndUpdate(
    req.params.id,
    { bon_Entree, article_id, qte_e, pu_e, fournisseur_id },
    { new: true }
  );
  res.json({
    status: "success",
    message: "Entree updated successfully",
    entree,
  });
});

export const deleteEntreeCtrl = asyncHandler(async (req, res) => {
  const entree = await Entree.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    message: "Entree deleted successfully",
    entree,
  });
});
