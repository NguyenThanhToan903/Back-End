const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/product_be_3-24");
const Product = mongoose.model("product", {
  title: String,
  description: String,
  price: Number,
  thumbnail: String,
});
const port = 3000;

// =========== PUG ===================
app.set("views", "./views");
app.set("view engine", "pug");

// =========== END PUG =================

app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.send("<h1> Trang chủ </h1>");
  res.render("index.pug", { title: "Trang chủ", message: "Đây là trang chủ" });
});
app.get("/about", (req, res) => {
  res.render("about.pug", {
    title: "About",
    message: "This is page about",
  });
});

app.get("/products", async (req, res) => {
  const products = await Product.find({});

  console.log(products);

  res.render("products.pug", {
    title: "Sản phẩm",
    message: "Trang sản phẩm",
    products: products,
  });
});

app.get("/blog", (req, res) => {
  res.send("<h1>Trang danh sách bài viết mới</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Trang liên hệ</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
