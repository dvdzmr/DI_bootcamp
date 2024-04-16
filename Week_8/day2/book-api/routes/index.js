import express from "express";
const router = express.Router();


const books = [];

router.get("/", (req, res) => {
    res.send("Homepage");
  });
  
router.get("/book", (req, res) => {
    res.send(books);
});

router.get("/book/:id", (req, res) => {
    const { id } = res;
    const getBlog = books.find((blogbook) => blogbook.id === parseInt(id));
    if (getBlog) {
        return res.send(getBlog)
    }
    return res.send("Error, book not found");
    
});

router.post("/book", (req, res) => {
    const { title, content } = req.body;
    const createBlogpost = {
      id: (books.length + 1),
      title,
      content,
    };
    if (!title || !content) {
      return res
        .status(400)
        .json({ response: "Missing fields (name and/or description)" });
    }
    books.push(createBlogpost);
    res.json(createBlogpost);
  });

router.put("/book/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const updateBlogpost = books.find((blogbook) => blogbook.id === parseInt(id));

    if (!updateBlogpost) {
        return res.status(400).json({ response: `Todo ${id} not found`});
    }

    updateBlogpost.title = title;
    updateBlogpost.content = content;
    res.json(updatedTodo);
});


router.delete("/book/:id", (req, res) => {
    const id = req.params;
    const delBlogpost = books.find((blogbook) => blogbook.id === parseInt(id));
    if (!delBlogpost) {
      return res.status(400).json({ response: `Todo ${id} not found`});
    }
    books.splice(books.indexOf(delBlogpost), 1);
    res.json(delBlogpost);
  });


export default router;