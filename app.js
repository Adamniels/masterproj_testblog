require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const connectDB = require("./server/config/db");

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect DB
connectDB();

app.use(express.static("public"));

// Templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));

app.listen(PORT, () => {
  console.log("app listening at " + PORT);
});
