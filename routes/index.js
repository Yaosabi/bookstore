var express = require('express');
var router = express.Router();
const courseController = require('../controllers/courseController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/courses', courseController.viewAll);
router.get('/course/profile/:id', courseController.viewProfile)
router.get('/courses/edit/:id', courseController.renderEditForm);
router.post('/courses/edit/:id', courseController.updateCourse);
router.get('/courses/add', courseController.renderAddForm);
router.get('/courses/delete/:id', courseController.deleteCourse);
module.exports = router;
