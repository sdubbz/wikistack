const express = require("Express");
const morgan = require("morgan");
const app = express();
const port = 1337;

const { db, Page, User } = require("./models");

app.use(morgan());

app.use(express.static(__dirname + "./stylesheets"));

app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.send(`
testing
    `);
});

const init = async () => {
  await db.sync({ force: true });
  // make sure that you have a PORT constant
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
  });
};

init();
