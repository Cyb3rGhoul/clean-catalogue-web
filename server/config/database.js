const mongoose = require("mongoose");

const ConnectToDB = async () => {
  const DATABASE_URL = process.env.DATABASE_URL;
  await mongoose
    .connect(
      "mongodb+srv://mahendra:mahendra@cluster0.vkfhz0p.mongodb.net/clean-catalogue?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => {
      console.log("ERROR CONNECTING TO DATABASE");
      console.log(err);
    });
};

module.exports = { ConnectToDB };
