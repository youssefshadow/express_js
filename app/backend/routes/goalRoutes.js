const express = require("express");
const router = express.Router();
const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
  getGoalById,
} = require("../controllers/goalController");

router.get("/", getGoals);
router.get("/:id", getGoalById);
router.post("/", addGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

module.exports = router;
