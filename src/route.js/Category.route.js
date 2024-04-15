// segment.route.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllar/Category.controllar'); // Corrected typo in controller import
const verifyJwt = require("../middleware/jwt");

router.post('/category', categoryController.createCategory);
router.get('/categories', verifyJwt.verifyJwt, categoryController.getAllOptionscategory); // Corrected middleware function import
router.patch('/category/:categoryId', categoryController.UpdateCategory);
router.delete('/category/:categoryId', categoryController.CategoryBydelete);
router.post('/service/:categoryId', categoryController.createCategoryservice);
router.get('/services/:categoryId', categoryController.createCategoryservicegetbyid);
router.delete('/category/:categoryId/service/:serviceId', categoryController.deleteservice);
 router.put('/category/:categoryId/service/:serviceId', categoryController.updateservice);

module.exports = router;
