import express from "express";
import formData from "./pages/login.js";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1> <a href='/login'>Go to login</a>");
});

app.get("/login", (req, res) => {
  res.send(formData());
});

app.post("/submit", (req, res) => {
  res.send("<h1>submitted</h1> <a href='/'>back to home </a>");
});
app.listen(3500);
