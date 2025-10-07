const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please fill in all required fields' 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please enter a valid email address' 
    });
  }

  try {
    let transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'yourgmail@gmail.com',
        pass: process.env.EMAIL_PASS || 'mubowphjtpnemeyd', // use Gmail App Password
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER || 'yourgmail@gmail.com',
      to: process.env.EMAIL_TO || 'zami.roamingbd@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00AEEF;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This message was sent from the Roaming Travel website contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        This message was sent from the Roaming Travel website contact form.
      `,
    };

    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! We\'ll get back to you soon.' 
    });
    
  } catch (err) {
    console.error('Email sending error:', err);
    res.status(500).json({ 
      success: false, 
      message: 'Error sending message. Please try again later.' 
    });
  }
});

module.exports = router;