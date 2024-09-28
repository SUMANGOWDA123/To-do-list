const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize the SQLite database
const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Route to add a new task
app.post('/add-task', (req, res) => {
  const taskName = req.body.taskName;
  const isCompleted = req.body.isCompleted ? 1 : 0;
  const query = 'INSERT INTO tasks (task_name, is_completed) VALUES (?, ?)';

});