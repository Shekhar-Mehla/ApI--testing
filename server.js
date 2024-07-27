import express from "express";
// creating server

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("hello i am ready to test ");
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http//:localhost:${PORT}`);
});
