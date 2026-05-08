exports.globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'fail';

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      status: 'fail',
      message: messages.join('. '),
    });
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({
      status: 'fail',
      message: `${field} already exists`,
    });
  }

  // Mongoose invalid ObjectId
  if (err.name === 'CastError') {
    return res.status(400).json({
      status: 'fail',
      message: `Invalid ${err.path}: ${err.value}`,
    });
  }

  // Multer file size error
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      status: 'fail',
      message: 'File too large. Max size is 2MB',
    });
  }

  // Operational (known) errors
  if (err.isOperational) {
    return res.status(statusCode).json({
      status,
      message: err.message,
    });
  }

  // Unknown/programming errors — don't leak details
  console.error('💥 Unexpected Error:', err);
  res.status(500).json({
    status: 'fail',
    message: 'Something went wrong on the server',
  });
};
