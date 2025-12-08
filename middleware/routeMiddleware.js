import express from "express";
const app = express();
function checkAgeRouteMiddleware(req, res, next) {
  if (!req.query.age || req.query.age < 18) {
    res.send("<h1>Chhote Bachhe Ho Kya</h1>");
  } else {
    next();
  }
}
function checkURLRouteMiddleware(req, res, next) {
  console.log("the requested URl is := " + req.url);
  next();
}

app.get("/", (req, res) => {
  res.send(`
    <h1>HOME Page</h1>
    <a href="/admin"> admin >>> </a> <br/><br/>
    <a href="/employee"> employee >>> </a> `);
});

app.get("/admin", checkURLRouteMiddleware, (req, res) => {
  res.send(`
    <h1>ADMIN Page</h1>
    <a href="/"> Home >>> </a> <br/><br/>
    <a href="/employee"> Employee >>> </a> `);
});

app.get(
  "/employee",
  checkAgeRouteMiddleware,
  checkURLRouteMiddleware,
  (req, res) => {
    res.send(`
    <h1>EMLPLOYEE Page</h1>
    <a href="/admin"> admin >>> </a> <br/><br/>
    <a href="/"> Home >>> </a> `);
  }
);
app.listen(3000);
