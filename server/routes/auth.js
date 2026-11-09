
const express = require('express');
const bcrypt = require('bcrypt');
const prisma = require('../lib/prisma');

const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Name, email and password are required'
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: 'Password must be at least 8 characters'
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail }
    });

    if (existingUser) {
      return res.status(409).json({
        message: 'Email is already registered'
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        passwordHash
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true
      }
    });

    return res.status(201).json({
      message: 'Account created successfully',
      user
    });

  } catch (error) {
    console.error('Registration error:', error);

    return res.status(500).json({
      message: 'Something went wrong during registration'
    });
  }
});

module.exports = router;
