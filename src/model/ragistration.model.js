const db = require('../../config/config');
const ragistrationModel = {};


ragistrationModel.ragistion = (body,callback) => {
    // console.log(body);
    // console.log('Callback:', body); // Log callback parameter for debugging
  
    db.query('CALL registrationinsert(?,?,?,?,?)', [body.name,body.email,body.phone_number,body.address,body.Password], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            if (typeof callback === 'function') {
                callback(err); // Call callback with error if it's a function
            }
        } else {
            if (typeof callback === 'function') {
                callback(null, result); // Call callback with result if it's a function
            }
        }
    });
};

ragistrationModel.login = (email,password,callback) => {
    // console.log(body);
    // console.log('Callback:', body); // Log callback parameter for debugging
  
    db.query('CALL login(?,?)', [email,password], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            if (typeof callback === 'function') {
                callback(err); // Call callback with error if it's a function
            }
        } else {
            if (typeof callback === 'function') {
                callback(null, result); // Call callback with result if it's a function
            }
        }
    });
};

module.exports = ragistrationModel;