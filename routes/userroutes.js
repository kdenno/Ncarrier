const express = require('express');
const router = express.Router();
const userroutesController = require('../controllers/userroutes');

router.get("/", userroutesController.getIndex);
router.get("/terms", userroutesController.getTerms);

module.exports = router;