import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB, getDBStatus } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database (with automatic fallback to in-memory if MongoDB is not running)
connectDB();

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  process.env.CLIENT_URL
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or same-origin)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Dev convenience
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Request logging in development
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    if (req.originalUrl.startsWith('/api')) {
      console.log(`[API] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
    }
  });
  next();
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/portfolio', portfolioRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Sandesh Salavi Portfolio API (MERN Stack)',
    version: '1.0.0',
    status: 'online',
    endpoints: {
      portfolio: '/api/portfolio/data',
      health: '/api/portfolio/health',
      resume: '/api/portfolio/resume-status',
      contact: 'POST /api/contact'
    },
    database: getDBStatus()
  });
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('[Server Error]', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start Express server
const server = app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Sandesh Salavi Portfolio Backend is running!`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`📋 Health: http://localhost:${PORT}/api/portfolio/health`);
  console.log(`💼 Portfolio Data: http://localhost:${PORT}/api/portfolio/data`);
  console.log(`====================================================`);
});

export default app;
