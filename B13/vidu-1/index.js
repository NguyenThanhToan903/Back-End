const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.pug", { title: "Hey", massage: "Hello there!" });
});

app.get("/about", { title: "About", massage: "This is page about" });
app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`);
});
