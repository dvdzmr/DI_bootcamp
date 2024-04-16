import express from "express";
const router = express();
import { writeFile } from 'fs';
import task from './task.json' with { type: "json" };


router.get("/tasks", (req, res) => {
    res.send(task);
})

router.get("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const getTask = task.find((task) => task.id === parseInt(id));
    res.send(getTask);
})


router.post("/tasks", (req, res) => {
    const { title } = req.body;
    const createTask = {
      id: (task.length + 1),
      title,
    };
    if (!title) {
      return res
        .status(400)
        .json({ response: "Missing title" });
    };

    task.push(createTask);
    writeFile("./task.json", JSON.stringify(task, null, 2), (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
    });

    res.json(task);
})

router.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const getTask = task.find((task) => task.id === parseInt(id));
    getTask.title = title;
    writeFile("./task.json", JSON.stringify(task, null, 2), (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
    });
    res.json(task);
})

router.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const getTask = task.find((task) => task.id === parseInt(id));
    task.splice(task.indexOf(getTask), 1);
    writeFile("./task.json", JSON.stringify(task, null, 2), (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
        console.log('Data written successfully to disk');
    });
    res.json(task);

})

export default router;
// module.exports = router;