
const ragistraionModel = require('../model/ragistration.model');
const jwt = require("jsonwebtoken");
const dbConn = require('../../config/config');
require("dotenv").config();



const ragistraionController = {};

ragistraionController.ragistraion = (req, res) => {
  // const userDetails = verifyJwt(req);
  //   const { company_id, segment_Name, quantities, is_active } = req.body; 
  console.log(res);
  ragistraionModel.ragistion(req.body, (err, result) => {
    console.log(result);
    if (err) {
      console.error('Error inserting ragistration:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ message: 'ragistration inserted' });
  });


};



ragistraionController.login = async (req, res, next) => {


  try {

    ragistraionModel.login(req.body.email, req.body.password, (err, result) => {
      if (err) {
        console.error('Error inserting ragistration:', err);
        return res.status(500).json({ error: 'Internal server error' });
      } else {

       

          console.log(result[0][0]);

          checkMatch(result[0][0].password, req.body.password)

          function checkMatch(variable1, variable2) {
            // Check if the variables are strictly equal
            if (variable1 == variable2) {
              return true;
            } else {
              return res.status(401).json({ message: 'enter Passwords do not match.' });
            }

          }

        



        const theToken = jwt.sign({ data: result[0][0] }, "abcdmanku$1237FHIY8OMKUHYJ#BGUBJY@BYUJ", { expiresIn: '10h' });
        return res.json({
          success: true,
          message: "User Login Successfully",
          token: theToken,
          // Data:req.body,(only use in registration page)
        });

      }
    });
  } catch (err) {
    next(err);
  }
};
module.exports = ragistraionController;


