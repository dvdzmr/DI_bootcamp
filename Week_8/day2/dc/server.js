import express from "express";
import router from "./routes/route.js";

const app = express();
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("server active on localhost:5000"));