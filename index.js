const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Setup server port
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const cors = require("cors");
app.use(
  cors({
    origin: [
    
      // "http://localhost:34502",
      // "http://103.228.83.115:34502",
    ],
    credentials: true,
    methods: "POST, GET, PUT, OPTIONS, DELETE",
  })
);

const ragistrationRoute = require("./src/route.js/ragistraion.route");

const CategoryRoute = require("./src/route.js/Category.route");

app.use(ragistrationRoute)

app.use(CategoryRoute)



app.get("/", (req, res) => {
  res.send("Hello World! codes for tomorrow is live!!");
});



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
