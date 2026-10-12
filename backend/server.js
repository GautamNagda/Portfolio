import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Origins Configuration
const defaultAllowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
];

if (process.env.CLIENT_URL) {
  // Support comma-separated URLs and strip trailing slashes
  const envOrigins = process.env.CLIENT_URL
    .split(',')
    .map(url => url.trim().replace(/\/+$/, ''))
    .filter(Boolean);
  defaultAllowedOrigins.push(...envOrigins);
}

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow non-browser requests (mobile apps, curl, Postman, server-to-server)
    if (!origin) return callback(null, true);

    const cleanOrigin = origin.replace(/\/+$/, '');

    const isExplicitlyAllowed = defaultAllowedOrigins.some(
      allowed => cleanOrigin.toLowerCase() === allowed.toLowerCase()
    );

    // Also automatically allow any *.vercel.app deployment
    const isVercelDomain = /^https:\/\/[a-zA-Z0-9_-]+\.vercel\.app$/i.test(cleanOrigin);

    if (isExplicitlyAllowed || isVercelDomain) {
      return callback(null, true);
    }

    console.warn(`[CORS] Origin blocked: ${origin}. Allowed origins:`, defaultAllowedOrigins);
    return callback(new Error(`Not allowed by CORS: ${origin}`));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Root & Health Check Endpoints
app.get('/', (req, res) => {
  res.json({
    message: "Gautam Nagda Portfolio Backend API",
    status: "online",
    endpoints: {
      health: "/api/health",
      info: "/api/info",
      contact: "POST /api/contact"
    }
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'portfolio-backend'
  });
});

// Developer Info Endpoint
app.get('/api/info', (req, res) => {
  res.json({
    name: "Gautam Nagda",
    role: "Full-Stack Developer & CS Engineering Student",
    location: "Jaipur / Udaipur, Rajasthan, India",
    education: "B.Tech Computer Science Engineering (JECRC Foundation)",
    links: {
      email: "gautamnagda687@gmail.com",
      gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=gautamnagda687@gmail.com",
      github: "https://github.com/GautamNagda",
      linkedin: "https://www.linkedin.com/in/gautam-nagda-410a52326?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      instagram: "https://www.instagram.com/rohit.editttz?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
    }
  });
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields (name, email, message) are required."
      });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address."
      });
    }

    console.log("📨 New Contact Inquiry Received:");
    console.log(`- From: ${name} (${email})`);
    console.log(`- Message: ${message}`);

    // In production, configure nodemailer or SendGrid using environment variables
    // For now, successfully acknowledge receipt
    return res.status(200).json({
      success: true,
      message: "Thank you for reaching out! Your message has been received.",
      receivedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return res.status(500).json({
      success: false,
      error: "An internal server error occurred while processing your message."
    });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.originalUrl} not found.`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({
    success: false,
    error: "Internal Server Error"
  });
});

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 Portfolio Backend running on port ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`📩 Contact API:  http://localhost:${PORT}/api/contact`);
  console.log(`===============================================`);
});
