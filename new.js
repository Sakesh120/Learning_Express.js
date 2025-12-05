// const express =require('express')  //// package.json  :-   "type": "commmon.js",
import express from "express"; //// package.json   :-   "type": "module",
import home, { contact } from "./pages/home.js";

const app = express();

app.get("", (req, res) => {
  res.send(home());
});

app.get("/contact", (req, res) => {
  res.send(contact());
});

app.listen(3200);
