require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");

const app = express();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// demo api
app.get("/", (req, res) => {
  res.send("Welcome to Blog application");
});
const PORT = process.env.PORT || 8000;

async function conn() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Database connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
conn();
