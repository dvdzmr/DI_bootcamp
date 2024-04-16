import express from "express";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use("/", router);

app.listen(3000, () => console.log("Hosting on 127.0.0.1:3000"));