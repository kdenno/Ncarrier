const express = require('express');
const router = express.Router();
const userroutesController = require('../controllers/userroutes');

router.get("/", userroutesController.getIndex);

module.exports = router;