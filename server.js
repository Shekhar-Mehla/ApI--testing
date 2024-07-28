import express, { json } from "express";

// creating server

const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import router from "./src/routers/task.js";

app.use("/api/v1/tasks", router);
app.get("/", (req, res) => {
  res.status(200).send("djfghjfdjf");
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://:localhost:${PORT}`);
});
