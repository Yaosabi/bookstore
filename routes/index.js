var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController.js');
const authorController = require('../controllers/authorController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', bookController.viewAll);
router.get('/book/profile/:id', bookController.viewProfile)
router.get('/books/edit/:id', bookController.renderEditForm);
router.post('/books/edit/:id', bookController.updateAuthor);
router.get('/books/add', bookController.renderAddForm);
router.get('/books/delete/:id', bookController.deleteAuthor);
router.get('/books/:bookId/enroll/', bookController.addAuthor);
router.get('/books/:bookId/removeAuthor/:authorId', bookController.removeBook);



router.get('/authors', authorController.viewAll);
router.get('/authors/profile/:id', authorController.viewProfile);
router.get('/authors/edit/:id', authorController.renderEditForm);
router.get('/authors/add', authorController.renderAddForm);
router.get('/authors/delete/:id', authorController.deleteBook);
router.get('/authors/:authorId/removeBook/:bookId', authorController.removeAuthor);
module.exports = router;
