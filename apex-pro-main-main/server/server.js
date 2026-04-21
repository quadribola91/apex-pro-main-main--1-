const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const cron = require("node-cron");
require("dotenv").config();

const app = express();

// ======================
// MIDDLEWARE
// ======================
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.use(express.json());

// ======================
// TEST ROUTE
// ======================
app.get("/", (req, res) => {
  res.send("Server is working");
});

// ======================
// CSV SETUP
// ======================
const csvFilePath = path.join(__dirname, "messages.csv");

const logMessageToCSV = (name, email, message) => {
  const timestamp = new Date().toISOString();

  const csvRow = `"${timestamp}","${name}","${email}","${message.replace(/"/g, '""')}"\n`;

  if (!fs.existsSync(csvFilePath)) {
    const headers = `"Timestamp","Name","Email","Message"\n`;
    fs.writeFileSync(csvFilePath, headers);
  }

  fs.appendFileSync(csvFilePath, csvRow);
};

// ======================
// BLUEHOST SMTP CONFIG
// ======================
const transporter = nodemailer.createTransport({
  host: "in.abaxps.com",     // Bluehost outgoing server
  port: 465,                 // SSL port
  secure: true,              // must be true for 465
  auth: {
    user: process.env.EMAIL_USER, // info@in.abaxps.com
    pass: process.env.EMAIL_PASS, // mailbox password
  },
});

// ======================
// SMTP DEBUG CHECK
// ======================
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ SMTP VERIFY ERROR:", error);
  } else {
    console.log("✅ SMTP READY - Bluehost connection successful");
  }
});

// ======================
// SEND EMAIL API
// ======================
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("📩 Incoming request:", req.body);

    // Save to CSV
    logMessageToCSV(name, email, message);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <h2>📩 New Website Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log("❌ EMAIL ERROR:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

// ======================
// DOWNLOAD CSV
// ======================
app.get("/messages-csv", (req, res) => {
  if (fs.existsSync(csvFilePath)) {
    res.download(csvFilePath, "messages.csv");
  } else {
    res.status(404).json({ error: "No messages logged yet" });
  }
});

// ======================
// DAILY EMAIL REPORT (6PM)
// ======================
cron.schedule("0 18 * * *", async () => {
  try {
    console.log("⏰ Running daily email report...");

    if (!fs.existsSync(csvFilePath)) {
      console.log("No CSV file found. Skipping report.");
      return;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "olamideajao79@gmail.com",
      subject: "📊 Daily Contact Messages Report",
      text: "Attached is today's messages report.",
      attachments: [
        {
          filename: "messages.csv",
          path: csvFilePath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Daily report sent successfully");
  } catch (error) {
    console.log("❌ DAILY REPORT ERROR:", error);
  }
});

// ======================
// START SERVER
// ======================
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});