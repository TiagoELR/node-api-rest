const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).send({ tasks: tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send({ task });
});
const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    res.status(404).send({ error: "Not found" });
  }
  res.status(200).send({ task });
});
const updateTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true
  });
  if (!task) {
    res.status(404).send({ error: "Not found" });
  }
  res.status(200).send({ task });
});
const deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findByIdAndDelete({ _id: req.params.id });
  if (!task) {
    res.status(404).send({ error: "Not found" });
  }
  res.status(200).send({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
