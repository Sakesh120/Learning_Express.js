import uesrslist from "../model/userModel.js";

export default function handleUser(req, res) {
  const userData = uesrslist();
  res.render("user", { userData: userData });
}
