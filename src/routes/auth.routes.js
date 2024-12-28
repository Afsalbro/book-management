const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/auth.controller');

router.post('/register', [
  check('username').notEmpty().isLength({ min: 3 }),
  check('password').notEmpty().isLength({ min: 6 }),
  check('role').optional().isIn(['admin', 'user'])
], authController.register);

router.post('/login', [
  check('username').notEmpty(),
  check('password').notEmpty()
], authController.login);

module.exports = router;
