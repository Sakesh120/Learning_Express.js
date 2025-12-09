import express from "express";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/user", (req, res) => {
  res.send("user page");
});
app.get("/wait", (req, res) => {
  setTimeout(() => {
    res.send("after 1 second");
  }, 1000);
});
app.listen(3100);
