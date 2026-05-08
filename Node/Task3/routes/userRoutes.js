const express = require('express');
const router = express.Router();

const { protect, restrictTo } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  getMe,
  uploadProfilePic,
} = require('../controllers/userController');

// All routes below require authentication
router.use(protect);

// GET /api/users/me  — logged in user's profile
router.get('/me', getMe);

// POST /api/users/me/upload-pic  — upload profile picture
router.post('/me/upload-pic', upload.single('profilePic'), uploadProfilePic);

// GET /api/users?page=1&limit=10  — admin only
router.get('/', restrictTo('admin'), getAllUsers);

// GET /api/users/:id  — any authenticated user
router.get('/:id', getUser);

// PUT /api/users/:id  — own profile or admin (with optional pic upload)
router.put('/:id', upload.single('profilePic'), updateUser);

// DELETE /api/users/:id  — admin only
router.delete('/:id', restrictTo('admin'), deleteUser);

module.exports = router;
