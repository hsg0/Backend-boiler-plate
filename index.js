const express = require("express");
const app = express();
const port = 3000;
const Path = require("path");

app.set("view engine", "ejs");
app.use(express.static(Path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
