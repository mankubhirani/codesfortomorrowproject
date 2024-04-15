const jwt = require("jsonwebtoken");

exports.verifyJwt = (req) => {
  if (!req.headers.authorization) {
    console.log("jnjn");
    throw { message: 'Authorization header not present!', code: 400 };
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    console.log("jnjnj");
    const data = jwt.verify(token, "abcdmanku$1237FHIY8OMKUHYJ#BGUBJY@BYUJ");
    return data;
  } catch (error) {
    throw { message: 'Invalid token!', code: 401 }; // Unauthorized
  }
};
