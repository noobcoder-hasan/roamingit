const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Allow frontend origins
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const contactRoutes = require('./routes/contact');
const sheetsRoutes = require('./routes/sheets');
app.use('/api', contactRoutes);
app.use('/api', sheetsRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Roaming Travel API is running!',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Roaming Travel API server is running on port ${PORT}`);
  console.log(`📧 Contact form endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`📊 Google Sheets endpoint: http://localhost:${PORT}/api/sheets`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
});