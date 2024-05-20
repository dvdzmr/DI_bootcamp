import express from "express";
const router = express.Router();

const todos = [];
// get
router.get("/", (req, res) => {
  res.send("Homepage");
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

export default router;
