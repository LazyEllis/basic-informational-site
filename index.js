import express from "express";

const app = express();

const options = { root: import.meta.dirname };

app.get("/", (req, res) => {
  res.sendFile("./pages/index.html", options);
});

app.get("/about", (req, res) => {
  res.sendFile("./pages/about.html", options);
});

app.get("/contact-me", (req, res) => {
  res.sendFile("./pages/contact-me.html", options);
});

app.use((req, res, next) => {
  res.status(404).sendFile("./pages/404.html", options);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
