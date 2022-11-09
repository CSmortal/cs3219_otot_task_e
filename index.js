const express = require('express');
const cors = require('cors');
const http = require("http")
const axios = require('axios');
const app = express()
const db = require('./db');
const httpServer = http.createServer(app)

app.use(cors());
app.use(express.json());



app.get('/todos', async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM todos");
    res.json(response.rows); 
  } catch (error) {
    res.status(500).json("Failed to get data from db");
    console.error(error.message);
  }
})

app.post('/todos', async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    
    for (const todo of data) {
      console.log(todo);
      const { userId, id, title, completed } = todo;
      await db.query("INSERT INTO todos VALUES ($1, $2, $3, $4)", [userId, id, title, completed]);
    }

    res.status(200).json("Successfully inserted data into db");
  } catch (error) {
    res.status(500).json("Failed to insert data into db");
    console.error(error.message);
  }
})

httpServer.listen(5000, () => {
  console.log("Server listening on port 5000")
})