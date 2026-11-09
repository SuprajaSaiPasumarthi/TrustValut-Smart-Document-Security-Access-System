
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false
});

app.use(limiter);

// Authentication routes
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);

app.get('/api/auth/test', (req, res) => {
  res.json({
    message: 'Auth route is working!'
  });
});
// Test route
app.get('/', (req, res) => {
  console.log('TEST ROUTE IS BEING REGISTERED');
  res.json({
    message: 'Welcome to TrustVault SecureDocs API',
    status: 'Server is running'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`TrustVault server running on http://localhost:${PORT}`);
});
