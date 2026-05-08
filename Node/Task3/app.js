const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const { globalErrorHandler } = require('./middleware/errorMiddleware');

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Route ${req.originalUrl} not found`,
  });
});

// Global error handler (must be last)
app.use(globalErrorHandler);

// Connect to MongoDB then start server
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(' MongoDB connection error:', err.message);
    process.exit(1);
  });
