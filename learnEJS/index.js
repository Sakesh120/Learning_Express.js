import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("first page");
});
app.get("/next", (req, res) => {
  res.send("next page");
});
app.get("/third", (req, res) => {
  res.send("third page");
});
app.listen(3200);
