import express, { urlencoded } from "express";
import handleUser from "./controller/userController.js";
const app = express();

// app.use(urlencoded({ extended: false }));  //use to get req.data

app.set("view engine", "ejs");
app.get("/", (erq, res) => {
  res.send(`
    <h2>Home Page </h2>
  <a href='/users'>user page ... </a>
  `);
});
app.get("/users", handleUser);
app.listen(3100);
