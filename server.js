// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static frontend files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for applications (for demo purposes)
let applications = [];

// API endpoint to submit a new application
app.post('/api/apply', (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const newApplication = {
    name,
    email,
    role,
    submittedAt: new Date()
  };

  applications.push(newApplication);
  res.json({ message: 'Application submitted successfully!', application: newApplication });
});

// API endpoint to get all applications
app.get('/api/applications', (req, res) => {
  res.json(applications);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
