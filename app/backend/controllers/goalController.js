const GoalModel = require("../models/goalModel");
const asyncHandler = require("express-async-handler");

// Get les objectifs
const getGoals = asyncHandler(async (req, res) => {
  const goals = await GoalModel.find();
  res.status(200).json(goals);
});

// Get un objectif par son id
const getGoalById = asyncHandler(async (req, res) => {
  const goal = await GoalModel.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  res.status(200).json(goal);
});
// Ajout objectif
const addGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await GoalModel.create({ text: req.body.text });
  res.status(200).json(goal);
});

// Modification des objectifs
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await GoalModel.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await GoalModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.status(200).json(updatedGoal);
});

// Supprimer un objectif
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await GoalModel.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const deletedGoal = await GoalModel.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedGoal);
});

module.exports = {
  getGoals,
  addGoal,
  getGoalById,
  updateGoal,
  deleteGoal,
};
