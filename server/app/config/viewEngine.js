import express from "express";
import path from "path";
import { __dirname, __filename } from "../libs/path.js";

const configViewEngine = (app) => {
   app.set("views", path.join("./app", "views"));
   app.set("view engine", "ejs");

   // config static files: images/css/js
   app.use(express.static(path.join("./app", "public")));
};

export default configViewEngine;
