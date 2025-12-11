import express from "express";
const app = express();
app.get("/", (req, res) => {
  const users = ["sakesh", "samir", "sahil", "swapnil", "salman"];
  let data = `<ul>`;
  users.map((e, i) => {
    data += `<li key={${i}}><a href="user/${e}">${e}</a></li>`;
  });
  data += `</ul>`;
  res.send(data);
});

app.get("/user/:name", (req, res) => {
  let userName = req.params.name;
  res.send(
    `<h3 style="text-transform: capitalize;">This is ${userName}'s Profile page </h3>`
  );
});
app.listen(3400);
