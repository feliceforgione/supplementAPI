const Medication = require("../models/Medication");

module.exports = {
  getMedications: async (req, res) => {
    try {
      const medications = await Medication.find();
      //res.render("todos.ejs", { todos: todoItems, left: itemsLeft });
      res.status(200).json({
        status: "success",
        restults: medications.length,
        data: {
          medications,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "fail",
      });
    }
  },
  getOneMedication: async (req, res) => {
    try {
      const medication = await Medication.findById(req.params.id);
      res.status(200).json({
        status: "success",
        data: {
          medication,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "fail",
      });
    }
  },
  addMedication: async (req, res) => {
    try {
      const medication = await Medication.create(req.body);
      res.status(200).json({
        status: "success",
        data: {
          medication,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "fail",
      });
    }
  },
  updateMedication: async (req, res) => {
    try {
      const medication = await Medication.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200).json({
        status: "success",
        data: {
          medication,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "fail",
      });
    }
  },
  deleteMedication: async (req, res) => {
    try {
      const medication = await Medication.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: "success",
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "fail",
      });
    }
  },
};
