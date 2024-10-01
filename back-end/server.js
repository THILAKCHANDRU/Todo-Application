const express = require("express");
const app = express();

const db = require("./db.js");

const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Running successfully in ${PORT}`);
});

app.get("/", async (req, res) => {
  await db.query(
    `CREATE TABLE  IF NOT EXISTS TASKS(ID INT PRIMARY KEY , TASK VARCHAR(220) , DUE DATE , DESCRIPTION VARCHAR(220))`
  );
});

