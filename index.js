const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const oneNews = news.find((n) => n._id === id);
  res.send(oneNews);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
  } else {
    const newsCategory = news.filter((n) => n.category_id === id);
    res.send(newsCategory);
  }
});

app.listen(port, () => {
  console.log("this server running port:", port);
});
