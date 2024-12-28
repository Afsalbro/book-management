const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const bookController = require('../controllers/book.controller');
const { verifyToken, isAdmin } = require('../middleware/auth.middleware');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

router.post('/', [
  verifyToken,
  isAdmin,
  check('title').notEmpty(),
  check('author').notEmpty(),
  check('genre').optional(),
  check('publishedYear').optional().isInt()
], bookController.createBook);

router.put('/:id', [
  verifyToken,
  isAdmin,
  check('title').optional(),
  check('author').optional(),
  check('genre').optional(),
  check('publishedYear').optional().isInt()
], bookController.updateBook);

router.delete('/:id', [verifyToken, isAdmin], bookController.deleteBook);

module.exports = router;