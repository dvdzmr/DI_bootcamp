import express from "express";
const router = express.Router();

const todos = [];
const books = [];

// get
router.get("/", (res) => {
  res.send("Homepage");
});

router.get("/about", (res) => {
  res.send("Aboutpage");
});

router.get("/todos", (res) => {
  res.json(todos);
});

router.get("/books", (res) => {
  res.json(books);
});


// post
router.post("/todos", (req, res) => {
  // console.log(req.body);
  const { name, desc } = req.body;
  const addTodo = {
    id: (todos.length + 1),
    name,
    desc,
    completed: false,
  };
  if (!name || !desc) {
    return res
      .status(400)
      .json({ response: "Missing fields (name and/or description)" });
  }

  todos.push(addTodo);
  res.json(addTodo);
});

router.post("/books", (req, res) => {
  const { name, desc } = req.body;
  const newBooks = {
    id: books.length + 1,
    name,
    desc,
    completed: false,
  };
  if (!name || !desc) {
    return res
      .status(400)
      .json({ response: "Missing fields (name and/or description)" });
  }

  books.push(newBooks);
  res.json(newBooks);
});

// put
router.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { name, desc, complete } = req.body;
  const updatedTodo = todos.find((todos) => todos.id === parseInt(id));

  if (!updatedTodo) {
    return res.status(400).json({ response: `Todo ${id} not found`});
  }

  updatedTodo.name = name;
  updatedTodo.desc = desc;
  updatedTodo.complete = complete;
  res.json(updatedTodo);
});

router.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { name, desc, complete } = req.body;
  const updatedBooks = books.find((books) => books.id === parseInt(id));

  if (!updatedBooks) {
    return res.status(400).json({ response: `Book ${id} not found`});
  }

  updatedBooks.name = name;
  updatedBooks.description = desc;
  updatedBooks.completed = complete;
  res.json(updatedBooks);
});

// delete
router.delete("/todos/:id", (req, res) => {
  const id = req.params;
  const removeTodo = todos.find((todos) => todos.id === parseInt(id));
  if (!removeTodo) {
    return res.status(400).json({ response: `Todo ${id} not found`});
  }
  todos.splice(todos.indexOf(removeTodo), 1);
  res.json(removeTodo);
});

router.delete("/books/:id", (req, res) => {
  const id  = req.params;
  const deleteBooks = books.find((books) => books.id === parseInt(id));
  if (!deleteBooks) {
    return res.status(400).json({ response: `Book ${id} not found`});
  }
  books.splice(books.indexOf(deleteBooks), 1);
  res.json(deleteBooks);
});

export default router;
