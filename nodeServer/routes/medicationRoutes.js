const express = require("express");
const router = express.Router();
const medicationController = require("../controllers/medications");
const protect = require("../middleware/authMiddleware");

router.get("/", medicationController.getMedications);

router.post("/", protect, medicationController.addMedication);

router.get("/:id", medicationController.getOneMedication);
router.patch("/:id", protect, medicationController.updateMedication);
router.delete("/:id", protect, medicationController.deleteMedication);

module.exports = router;
