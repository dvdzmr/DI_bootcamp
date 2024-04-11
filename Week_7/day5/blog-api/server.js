const express = require("express");
const app = express();
const port = 3000;

const data = [
  { id: 1, title: "first post", content: "this is my first post" },
  { id: 2, title: "second post", content: "this is my second post" },
  { id: 3, title: "third post", content: "this is my third post" },
];

app.use(express.json());

app.get("/posts", (req, res) => {
  res.json(data);
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = data.find((post) => post.id == id);

  if (!post) {
    res.status(404).send("Post not found");
  }

  res.json(post);
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: data.length + 1,
    title,
    content,
  };
  data.push(newPost);
  res.json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = data.find((post) => post.id == id);

  if (!post) {
    res.status(404).send("Post not found");
  }

  const { title, content } = req.body;
  post.title = title;
  post.content = content;

  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = data.find((post) => post.id == id);

  if (!post) {
    res.status(404).send("Post not found");
  }

  const index = data.indexOf(post);
  data.splice(index, 1);

  res.json(post);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
