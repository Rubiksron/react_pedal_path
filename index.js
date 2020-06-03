"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const pg = require("pg");
const client = new pg.Client(process.env.DATABASE_URL);

client.on("err:", (err) => console.error("ya done goofed, Client.js", err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/dist`));

app.get("*", (req, res) => res.sendFile(`${__dirname}/dist/index.html`));

client.connect().then(() => {
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
});
