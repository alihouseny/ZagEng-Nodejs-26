const User = require('../models/userModel');
const { AppError } = require('../utils/appError');

// GET /api/users?page=1&limit=10  (admin only)
exports.getAllUsers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalUsers = await User.countDocuments();
    const users = await User.find().skip(skip).limit(limit);

    res.status(200).json({
      status: 'success',
      data: {
        total: totalUsers,
        page,
        limit,
        totalPages: Math.ceil(totalUsers / limit),
        users,
      },
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/users/:id  (authenticated)
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(new AppError('User not found', 404));

    res.status(200).json({
      status: 'success',
      data: { user },
    });
  } catch (err) {
    next(err);
  }
};

// PUT /api/users/:id  (authenticated — own profile, or admin)
exports.updateUser = async (req, res, next) => {
  try {
    // Prevent password update through this route
    if (req.body.password) {
      return next(new AppError('Use /api/auth/change-password to update password', 400));
    }

    // Only allow admins to change roles
    if (req.body.role && req.user.role !== 'admin') {
      return next(new AppError('Only admins can change roles', 403));
    }

    // Non-admins can only update their own profile
    if (req.user.role !== 'admin' && req.user._id.toString() !== req.params.id) {
      return next(new AppError('You can only update your own profile', 403));
    }

    const updateData = { ...req.body };
    if (req.file) {
      updateData.profilePic = `/uploads/${req.file.filename}`;
    }

    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!user) return next(new AppError('User not found', 404));

    res.status(200).json({
      status: 'success',
      data: { user },
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/users/:id  (admin only)
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return next(new AppError('User not found', 404));

    res.status(200).json({
      status: 'success',
      data: { message: 'User deleted successfully' },
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/users/me  (authenticated — get own profile)
exports.getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      data: { user: req.user },
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/users/me/upload-pic  (authenticated)
exports.uploadProfilePic = async (req, res, next) => {
  try {
    if (!req.file) return next(new AppError('No file uploaded', 400));

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { profilePic: `/uploads/${req.file.filename}` },
      { new: true }
    );

    res.status(200).json({
      status: 'success',
      data: { user },
    });
  } catch (err) {
    next(err);
  }
};
