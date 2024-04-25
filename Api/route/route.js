const express = require('express');
const router = express.Router();
const userControllers = require('../controller/userController');

// List of Stories
router.get("/get", userControllers.getpersonalinformationData);
router.post("/post", userControllers.postpersonalinformationData);
router.put("/put", userControllers.putpersonalinformationData);
router.delete("/del", userControllers.deletepersonalinformationData);

module.exports = router;
