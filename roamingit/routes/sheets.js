const express = require('express');
const https = require('https');
const router = express.Router();

// Google Sheets integration endpoint
router.post('/sheets', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide name, email, and message' 
    });
  }

  try {
    // Send data to Google Sheets via Google Apps Script
    const result = await sendToGoogleSheets({ name, email, message });
    
    res.status(200).json({ 
      success: true, 
      message: 'Data saved to Google Sheets successfully',
      data: result
    });
    
  } catch (err) {
    console.error('Google Sheets error:', err);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to save to Google Sheets' 
    });
  }
});

// Helper function to send data to Google Apps Script
function sendToGoogleSheets(data) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data);
    
    const options = {
      hostname: 'script.google.com',
      path: process.env.GOOGLE_APPS_SCRIPT_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            const result = responseData ? JSON.parse(responseData) : { success: true };
            resolve(result);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${responseData}`));
          }
        } catch (parseError) {
          // If response is not JSON, still consider it successful if status is OK
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ success: true, response: responseData });
          } else {
            reject(new Error(`Parse error: ${parseError.message}`));
          }
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error(`Request error: ${error.message}`));
    });

    req.write(postData);
    req.end();
  });
}

module.exports = router;