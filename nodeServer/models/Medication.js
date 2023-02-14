const mongoose = require("mongoose");

const MedicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  effective: {
    type: String,
  },
  safety: {
    type: String,
  },
});

module.exports = mongoose.model("Medication", MedicationSchema);
