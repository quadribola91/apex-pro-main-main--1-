📬 Contact Form Email System (React + Node.js + Nodemailer)
A full-stack contact form system that allows users to send messages from a React frontend, which are then processed by a Node.js backend using Nodemailer and stored in a CSV file.
🚀 Features
📩 Send emails directly from a contact form
🗂 Save all messages to a CSV file
📊 Download messages as a CSV report
⏰ Automated daily email report (via cron job)
🔐 Environment-based configuration
🌐 CORS-enabled API for frontend integration
🛠 Tech Stack
Frontend
React
Framer Motion
React Icons
Backend
Node.js
Express.js
Nodemailer
node-cron
dotenv
fs (File System)
📁 Project Structure
project-root/
│
├── client/                # React frontend
│   └── ContactSection.js
│
├── server/                # Node backend
│   ├── server.js
│   ├── messages.csv       # Auto-generated
│   └── .env
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/contact-email-system.git
cd contact-email-system
2️⃣ Install dependencies
Backend:
cd server
npm install
Frontend:
cd ../client
npm install
3️⃣ Setup environment variables
Create a .env file inside /server:
PORT=5001
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-email-password
4️⃣ Run the application
Start backend:
cd server
node server.js
Start frontend:
cd client
npm start
🌐 API Endpoints
📩 Send Email
POST /send-email
Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
Response:
{
  "message": "Email sent successfully"
}
📥 Download CSV
GET /messages-csv
⚠️ Common Issues & Fixes
❌ CORS Error
Ensure backend allows your frontend origin:
app.use(cors({ origin: "http://localhost:3000" }));
❌ Unexpected token '<'
This happens when:
API route is incorrect
Backend is not running
Wrong port is used
✔ Fix: Ensure correct API URL and backend is active.
❌ Failed to fetch
Backend not running
CORS misconfiguration
📊 Automated Daily Report
Runs every day at 6 PM
Sends CSV file to configured email
Powered by node-cron
🔐 Security Notes
Never commit your .env file
Use environment variables for sensitive data
Restrict CORS origins in production
🌍 Deployment (Optional)
For production:
Replace localhost URLs with your domain
Use services like:
Render
Railway
Vercel (frontend)

📜 License
This project is licensed under the MIT License.
