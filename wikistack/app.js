const express = require("Express");
const morgan = require("Morgan");
const app = express();
const runMorgan = morgan();
const port = 1337;

// const expressStatic = require("express.static");
// const expressURL = require("Express.urlencoded");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send(`
      <html>
       <head>
         <title>My site</title>
       </head>
       <body>
         <h1>Hello World</h1>
       </body>
      </html>
    `);
});
