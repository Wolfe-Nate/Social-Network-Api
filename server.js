const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.port || 3001;

mongoose.connect(
  "mongodb+srv://dbnate:agreatpassword@cluster0.cf4rque.mongodb.net/?retryWrites=true&w=majority"
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// listen
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for SN-Api running on port ${PORT}!`);
  });
});
