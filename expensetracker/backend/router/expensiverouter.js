

const express = require('express');
const router = express.Router();
const ExpenseModel = require('../model/expensemodel');

// Utility function to get the date range for a given period
const getDateRange = (period) => {
  const now = new Date();
  let startDate;
  let endDate = new Date(); // Create a new Date object to avoid mutating the original

  switch (period) {
    case 'day':
      startDate = new Date(now.setHours(0, 0, 0, 0));
      endDate = new Date(now.setHours(23, 59, 59, 999));
      break;
    case 'week':
      const dayOfWeek = now.getDay();
      const diff = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Monday as start of week
      startDate = new Date(now.setDate(diff));
      startDate.setHours(0, 0, 0, 0);
      endDate.setDate(startDate.getDate() + 6);
      endDate.setHours(23, 59, 59, 999);
      break;
    case 'month':
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      endDate.setHours(23, 59, 59, 999);
      break;
    default:
      throw new Error('Invalid period');
  }

  return { startDate, endDate };
};


// Route to add a new expense entry
router.post('/expensivetable', async (req, res) => {
  const { date, amount, category, description } = req.body;

  try {
    if (!date || !amount || !category || !description) {
      return res.status(400).send("Please fill in all fields");
    }

    const existingExpense = await ExpenseModel.findOne({ date, amount, category, description });
    if (existingExpense) {
      return res.status(409).send("Expense already exists");
    }

    const newExpense = new ExpenseModel({ date, amount, category, description });
    await newExpense.save();

    return res.status(201).send("Expense entry added successfully");
  } catch (err) {
    console.error('Error while adding expense:', err);
    return res.status(500).send("Internal server error");
  }
});

// Route to get all expense entries
router.get('/expensivetable', async (req, res) => {
  try {
    const expenses = await ExpenseModel.find();
    return res.status(200).json(expenses);
  } catch (err) {
    console.error('Error while fetching expenses:', err);
    return res.status(500).send("Internal server error");
  }
});

// Route to update an expense entry by ID
router.put('/expensivetable/:id', async (req, res) => {
  const { id } = req.params;
  const { date, amount, category, description } = req.body;

  try {
    const updatedExpense = await ExpenseModel.findByIdAndUpdate(id, { date, amount, category, description }, { new: true });
    if (!updatedExpense) {
      return res.status(404).send("Expense not found");
    }
    return res.status(200).json(updatedExpense);
  } catch (err) {
    console.error('Error while updating expense:', err);
    return res.status(500).send("Internal server error");
  }
});

// Route to delete an expense entry by ID
router.delete('/expensivetable/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await ExpenseModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send("Expense not found");
    }
    return res.status(200).send("Expense deleted successfully");
  } catch (err) {
    console.error('Error while deleting expense:', err);
    return res.status(500).send("Internal server error");
  }
});
router.get('/summary', async (req, res) => {
  const { period } = req.query;

  if (!period) {
    return res.status(400).send("Period query parameter is required");
  }

  try {
    const { startDate, endDate } = getDateRange(period);

    const totalSpending = await ExpenseModel.aggregate([
      { $match: { date: { $gte: startDate, $lte: endDate } } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);

    res.json({ total: totalSpending[0] ? totalSpending[0].total : 0 });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get('/spending-by-category', async (req, res) => {
  const { period } = req.query;

  if (!period) {
    return res.status(400).send("Period query parameter is required");
  }

  try {
    const { startDate, endDate } = getDateRange(period);

    const spendingByCategory = await ExpenseModel.aggregate([
      { $match: { date: { $gte: startDate, $lte: endDate } } },
      { $group: { _id: '$category', total: { $sum: '$amount' } } },
      { $sort: { total: -1 } }
    ]);

    res.json(spendingByCategory);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


// Handle any other routes, responding with a 404 error
router.all('*', (req, res) => {
  res.status(404).send("Endpoint not found");
});

module.exports = router;
