import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("home page hai");
});

app.get("/user", (req, res) => {
  res.send1("user page hai"); /// giving error
});

app.get("/error", (req, res) => {
  const error = new Error(""); // creating error
  error.status = 404;
  next(error);
});

// function errorHandling(error, req, res, next) {
//   res.status(error.status || 500).send("kam abhi baaki hai, baad mai aana");
// }
// app.use(errorHandling);

////////////////or ///////////

app.use((error, req, res, next) => {
  res.status(error.status || 500).send("kam abhi baaki hai, baad mai aana");
});
app.listen(3400);
