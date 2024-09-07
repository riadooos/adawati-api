import asyncHandler from "express-async-handler";
import Fournisseur from "../models/Fournisseur.js";

export const createFournisseurCtrl = asyncHandler(async (req, res) => {
  const {
    fournisseurName,
    nameContact,
    wilaya,
    commune,
    address,
    phone,
    email,
    webSite,
    geolocalisation,
  } = req.body;
  const fournisseurNameExist = await Fournisseur.findOne({ fournisseurName });
  if (fournisseurNameExist) {
    throw new Error("fournisseur already exist");
  }
  const fournisseur = await Fournisseur.create({
    fournisseurName,
    nameContact,
    wilaya,
    commune,
    address,
    phone,
    email,
    webSite,
    geolocalisation,
    imgFournisseur: req?.file?.path,
  });
  res.json({
    status: "success",
    message: "Fournissuer created successfully",
    fournisseur,
  });
});

export const getAllFournisseursCtrl = asyncHandler(async (req, res) => {
  const fournisseurs = await Fournisseur.find();
  res.json({
    status: "success",
    message: "fournisseurs fetched successfully",
    fournisseurs,
  });
});

export const getOneFournisseurCtrl = asyncHandler(async (req, res) => {
  const fournissuer = await Fournisseur.findById(req.params.id);
  res.json({
    status: "success",
    message: "Fournisseur fetched successfully",
    fournissuer,
  });
});

export const updateFournisseurCtrl = asyncHandler(async (req, res) => {
  const {
    fournisseurName,
    nameContact,
    wilaya,
    commune,
    address,
    phone,
    email,
    webSite,
    geolocalisation,
  } = req.body;
  //update
  const fournisseur = await Fournisseur.findByIdAndUpdate(
    req.params.id,
    {
      fournisseurName,
      nameContact,
      wilaya,
      commune,
      address,
      phone,
      email,
      webSite,
      geolocalisation,
    },
    { new: true }
  );
  res.json({
    status: "success",
    message: "Fournisseur updated successfully",
    fournisseur,
  });
});

export const deleteFournisseurCtrl = asyncHandler(async (req, res) => {
  const fournisseur = await Fournisseur.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    message: "Fournisseur deleted successfully",
    fournisseur,
  });
});
