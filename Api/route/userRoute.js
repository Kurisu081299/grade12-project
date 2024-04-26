const express = require('express');
const router = express.Router();
const userControllers = require('../controller/userControllers');

// List of Stories
router.get("/get", userControllers.getpersonalinformationData);
router.post("/post", userControllers.postpersonalinformationData);
router.put("/put", userControllers.putpersonalinformationData);
router.delete("/del", userControllers.deletepersonalinformationData);

module.exports = router;
