// CategoryModel.controller.js

const CategoryModel = require('../model/Category.model');
const { verifyJwt } = require("../middleware/jwt");



const CategoryController = {};

CategoryController.createCategory = (req, res) => {
  // const userDetails = verifyJwt(req);
 

  CategoryModel.insertOrUpdateCategory(req.body, (err, result) => {
    console.log(result);
    if (err) {
      console.error('Error inserting  Category:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ message: 'Category inserted' });
  });



};
CategoryController.getAllOptionscategory = (req, res) => {
  const data = verifyJwt(req);
console.log(data);
  CategoryModel.getAllOptionscategory((err, categories) => {
    if (err) {
      console.error('Error fetching options segments:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ error: false, data: categories });
  });
};

CategoryController.UpdateCategory = (req, res) => {

  // const userDetails = verifyJwt(req);
  const categoryId = req.params;
  console.log(categoryId);
  CategoryModel.UpdateCategory(req.body, categoryId, (err, segments) => {
    if (err) {
      console.error('Error fetching segments by company_id:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ message: "category  Update successfull", error: false });
  });
};

CategoryController.CategoryBydelete = (req, res) => {

  // const userDetails = verifyJwt(req);
  const id = req.params;
  console.log(id);

  CategoryModel.CategoryBydelete(id, (err, segments) => {
    if (err) {
      console.error('Error fetching segments by company_id:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ message: "category  delete successfull", error: false });
  });
};

CategoryController.createCategoryservice = (req, res) => {

  const id = req.params;
  console.log(id);
  // console.log(req.body);
  // const userDetails = verifyJwt(req);
  //   const { company_id, segment_Name, quantities, is_active } = req.body;

  CategoryModel.createCategoryservice(req.body, id, (err, result) => {
    console.log(result);
    if (err) {
      console.error('Error inserting  Category:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ message: 'Category inserted' });
  });



};



CategoryController.createCategoryservicegetbyid = (req, res) => {

  const id = req.params;
  console.log(id);
  // console.log(req.body);
  // const userDetails = verifyJwt(req);
  //   const { company_id, segment_Name, quantities, is_active } = req.body;

  CategoryModel.createCategoryservicegetbyid(req.body, id, (err, result) => {
    console.log(result);
    if (err) {
      console.error('Error inserting  Category:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({
      message: 'Category get successfull',
      data: result,

      error: false
    });
  });



};


CategoryController.deleteservice = (req, res) => {

  const id = req.params;
  console.log(id);
  // console.log(req.body);
  // const userDetails = verifyJwt(req);
  //   const { company_id, segment_Name, quantities, is_active } = req.body;

  CategoryModel.deleteservice(req.body, id, (err, result) => {
    console.log(result);
    if (err) {
      console.error('Error inserting  Category:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({
      message: 'Category get successfull',
      data: result,

      error: false
    });
  });



};


module.exports = CategoryController;
