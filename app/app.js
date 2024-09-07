import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import morgan from "morgan";
import dbConnect from "../config/dbConnect.js";
import { globalErrhandler, notFound } from "../middelwares/globalErrhandler.js";
import articleRouter from "../routes/articleRoutes.js";
import categoryRouter from "../routes/categoryRoutes.js";
import marqueRouter from "../routes/marqueRoutes.js";
import fournisseurRouter from "../routes/fournisseurRoutes.js";
import entreeRouter from "../routes/entreeRoutes.js";
import boxRouter from "../routes/boxRoutes.js";
import oredreBoxRouter from "../routes/orderBoxRoutes.js";
import parentRouter from "../routes/parentRoutes.js";
import schoolRouter from "../routes/schoolRoutes.js";

//db connect
dbConnect();

const app = express();

app.use(cors());

//pass incoming data
app.use(express.json());

//routes
//Home route

//use morgan
app.use(morgan("tiny"));
//routes
//Home route
//app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/articles", articleRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/marques", marqueRouter);
app.use("/api/v1/fournisseurs", fournisseurRouter);
app.use("/api/v1/entrees", entreeRouter);
app.use("/api/v1/boxes", boxRouter);
app.use("/api/v1/orderboxes", oredreBoxRouter);
app.use("/api/v1/parents", parentRouter);
app.use("/api/v1/schools", schoolRouter);

//err middleware
app.use(notFound);
app.use(globalErrhandler);

export default app;
