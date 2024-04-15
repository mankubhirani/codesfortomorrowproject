// Category.model.js

const db = require('../../config/config');
const CategoryModel = {};

CategoryModel.insertOrUpdateCategory = (body,callback) => {
   console.log(body);

    db.query('CALL Insert_Category(?)', [body.category_name], (err, result) => {
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


CategoryModel.getAllOptionscategory = (callback) => {
    db.query('SELECT * FROM `codes for tomorrow`.category;', (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    });
};


CategoryModel.UpdateCategory = (body,company_id, callback) => {
    console.log(body);
    console.log(company_id);
    db.query(' UPDATE Category SET category_name = ? WHERE category_id = ?;', [body.category_name ,company_id.categoryId,], (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result[0]);
    });
};


CategoryModel.CategoryBydelete = (id, callback) => {
    console.log(id);
    db.query(' DELETE FROM Category WHERE category_id = ?;', [id.categoryId], (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result[0]);
    });
};

CategoryModel.createCategoryservice = (body,id, callback) => {
 
    // const companyId = company_id.companyId;
    console.log(body);
    console.log(id,"idddd");
    
    db.query('CALL Insert_Service(?,?,?)', [id.categoryId,body.service_name,body.service_type], (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result[0]);
    });
};


CategoryModel.createCategoryservicegetbyid = (body,id, callback) => {
 
    console.log(id,"idddd");
    
    db.query('SELECT * FROM `codes for tomorrow`.service where category_id = ?', [id.categoryId,], (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    });
};



CategoryModel.deleteservice = (id, callback) => {
    db.query('CALL Delete_Service(?, ?)', [id.serviceId, id.categoryId], (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    });
};

CategoryModel.updateservice = (id,body,callback) => {
    db.query('CALL Update_Service(?,?,?,?)', [id.serviceId,body.service_name,body.service_type, id.categoryId], (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    });
};



module.exports = CategoryModel;
