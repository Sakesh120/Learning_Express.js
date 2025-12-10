import express from "express";
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home", { name: "sakesh", adress: "India" });
});
app.get("/next", (req, res) => {
  res.send("next page");
});
app.get("/third", (req, res) => {
  res.send("third page");
});
app.listen(3200);
