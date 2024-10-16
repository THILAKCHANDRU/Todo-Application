const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

const db = require("./db.js");

const path = require("path");

const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,DELETE,PUT",
  })
);

app.listen(PORT, () => {
  console.log(`Server Running successfully in ${PORT}`);
});

app.get("/", async (req, res) => {
  try {
    await db.query(
      `CREATE TABLE  IF NOT EXISTS TASKS(ID INT PRIMARY KEY, TASK VARCHAR(220) , DUE_DATE DATETIME , DESCRIPTION VARCHAR(220),IMPORTANCE INT)`
    );
    res.status(200).send("Tabel created successful!!");
  } catch (err) {
    res.status(500).send("Error creating task!!");
    console.log(err);
  }
});

app.post("/update", async (req, res) => {
  const { ID, TASK, DUE_DATE, DESCRIPTION, IMPORTANCE } = req.body;
  try {
    await db.query(
      `INSERT INTO TASKS (ID,TASK,DUE_DATE,DESCRIPTION,IMPORTANCE) VALUES (?,?,?,?,?) `,
      [ID, TASK, DUE_DATE, DESCRIPTION, IMPORTANCE]
    );
    res.status(200).send("Insertion successful!!");
  } catch (err) {
    res.status(500).send("Error inserting task!!");
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query(`DELETE FROM TASKS WHERE ID=?`, [id]);
    res.status(200).send("Deleted the row successully!!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting task!!");
  }
});

app.get("/fetch", async (req, res) => {
  try {
    const [response] = await db.query(`SELECT * FROM TASKS`);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).send({ ERR: "Internal server Error" });
  }
});


app.get("/sort/:type", async (req,res)=>{
  const {type} = req.params
  try{
    const [response] = await db.query (`select * from tasks order by ${type} desc`);
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).send({ERR: "Internal Server Error"})
  }
})