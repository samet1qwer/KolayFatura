const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Auth-Token"],
  }),
);
// db
const connectDB = require("./db/db");
connectDB();
// models
const User = require("./model/userModel");

// seeds
const userSeeds = require("./seeds/userSeeds");

// seed users
const seedUsers = async () => {
  const users = await User.find();
  if (users.length === 0) {
    await User.insertMany(userSeeds);
  }
};
seedUsers();

// routers
const home = require("./routers/user/home");

app.use("/", home);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
