const app = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;

conn.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("%s listening at " + PORT);
  });
});