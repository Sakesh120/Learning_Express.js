import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send(`
    <h1>HOme Page hai re bhaaya </h1>
  <h2>Saahi aaye ho...!</h2>
  <a href='/login'>Login karoo...</a>
  `);
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/submit", (req, res) => {
  const data = req.body;
  console.log(data);
  res.render("submitData", {
    name: data.name,
    password: data.password,
    gender: data.gender,
  });
});
app.listen(3600);
