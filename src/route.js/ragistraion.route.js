const express = require('express');
const router = express.Router();
const ragistraionController = require('../controllar/ragistration.controllar');



router.post('/ragistrioninsert', ragistraionController.ragistraion);
router.post('/login', ragistraionController.login);
module.exports = router;
