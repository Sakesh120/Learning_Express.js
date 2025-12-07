import express from "express";
const app = express();

app.use((req, res, next) => {
  console.log("user accessing " + req.url);
  next();
});
app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/users", (req, res) => {
  res.send("users page");
});
app.get("/product", (req, res) => {
  res.send("produts page");
});
app.listen(3100);
