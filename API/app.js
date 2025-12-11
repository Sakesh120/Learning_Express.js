import express, { json } from "express";
import userData from "./users.json" with { type: "json" };
const app = express();

app.get("/", (req, res) => {
  res.send(userData);
});
app.get("/user/:id", (req, res) => {
  const userID = req.params.id;
  let filteredData = userData.filter((user) => user.id == userID);
  res.send(filteredData);
});
app.get("/username/:name", (req, res) => {
  const name = req.params.name;
  console.log(name);
  let filteredData = userData.filter((user) => user.name == name);
  res.send(filteredData);
});
app.listen(5123);
