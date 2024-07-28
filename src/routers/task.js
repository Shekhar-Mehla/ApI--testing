import express from "express";
const router = express.Router();

let fakeDB = [
  {
    id: "1",
    task: "cooking",
    hr: 40,
  },
  {
    id: "1",
    task: "cooking",
    hr: 40,
  },
  {
    id: "2",
    task: "watching tv",
    hr: 40,
  },
  {
    id: "3",
    task: "coding",
    hr: 40,
  },
  {
    id: "4",
    task: "playing cricket",
    hr: 40,
  },
];

// adding data using the post method
router.post("/", (req, res) => {
  fakeDB.push(req.body);
  res.send("data added successfully");
});

// reading data using the get method
router.get("/", (req, res) => {
  res.json({ message: "successfull", data: fakeDB });
});

// updating  data using the update method
router.put("/", (req, res) => {});

// deleting  data using the delete  method
router.delete("/", (req, res) => {});
export default router;
