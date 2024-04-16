import express from "express";
const router = express.Router();
const blogPosts = [];



router.get("/", (req, res) => {
    res.send("Homepage");
  });
  
router.get("/posts", (req, res) => {
    res.send(blogPosts);
});

router.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const getBlog = blogPosts.find((blogPosts) => blogPosts.id === parseInt(id));
    if (getBlog) {
        return res.send(getBlog)
    }
    return res.send("Error, blogpost not found");
    
});

router.post("/posts", (req, res) => {
    const { title, content } = req.body;
    const createBlogpost = {
      id: (blogPosts.length + 1),
      title,
      content,
    };
    if (!title || !content) {
      return res
        .status(400)
        .json({ response: "Missing fields (name and/or description)" });
    }
    blogPosts.push(createBlogpost);
    res.json(createBlogpost);
  });

router.put("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const updateBlogpost = blogPosts.find((blogPosts) => blogPosts.id === parseInt(id));

    if (!updateBlogpost) {
        return res.status(400).json({ response: `Todo ${id} not found`});
    }

    updateBlogpost.title = title;
    updateBlogpost.content = content;
    res.json(updatedTodo);
});

router.delete("/posts/:id", (req, res) => {
    const id = req.params;
    const delBlogpost = blogPosts.find((blogPosts) => blogPosts.id === parseInt(id));
    if (!delBlogpost) {
      return res.status(400).json({ response: `Todo ${id} not found`});
    }
    blogPosts.splice(blogPosts.indexOf(delBlogpost), 1);
    res.json(delBlogpost);
  });


export default router;