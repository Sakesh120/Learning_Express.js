const express = require("express"); //// package.json  :-   "type": "commmon.js",
const app = express();
app.get("", (req, res) => {
  res.send("<h1>Basic Example of express js</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Basic about page Example of express js</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Basic contact page Example of express js</h1>");
});

app.listen(3100);
