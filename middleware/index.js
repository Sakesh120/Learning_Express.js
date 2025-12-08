import express from "express";
const app = express();

// function checkAge(req, res, next) {
//   if (!req.query.age || req.query.age < 18) {
//     res.send("Rukk bhai ! tu abhi able nahi hai");
//   } else {
//     next();
//   }
// }
// app.use(checkAge);

function checkIP(req, res, next) {
  let ip = req.socket.remoteAddress;
  console.log(ip);
  if (ip.includes("192.168.43.231")) {
    res.send("Your not allwed");
  } else {
    next();
  }
}
app.use(checkIP);

app.get("/", (req, res) => {
  res.send("heyy home page hai");
});
app.get("/hi", (req, res) => {
  res.send("heyy hi page hai");
});
app.get("/home", (req, res) => {
  res.send("heyy home2 page hai");
});
app.listen(3200);
