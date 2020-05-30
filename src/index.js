//to run in development comment out lines 6-12 and show line 4 and run 'npm start'
//to run with the in-file server, comment out line 4 and uncomment 6-12 and run 'nodemon src/index.js'

// import App from "./js/components/App";

const express = require("express");
const PORT = process.env.PORT || 3000;
//change back to process.env.PORT before pushing to github
express()
  .use(express.static(`${__dirname}/dist`))
  .get("*", (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
  .listen(PORT, () => console.log("__SERVER_RUNNING__", PORT));
