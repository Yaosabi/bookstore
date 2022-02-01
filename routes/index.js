var express = require('express');
var router = express.Router();
const courseController = require('../controllers/courseController.js');
const studentController = require('../controllers/studentController.js');

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
router.get('/courses/:courseId/enroll/', courseController.enrollStudent);
router.get('/courses/:courseId/removeStudent/:studentId', courseController.removeStudent);



router.get('/students', studentController.viewAll);
router.get('/students/profile/:id', studentController.viewProfile);
router.get('/students/edit/:id', studentController.renderEditForm);
router.get('/students/add', studentController.renderAddForm);
router.post('/students/add', studentController.addStudents);
router.get('/students/delete/:id', studentController.deleteStudent);
router.post('/students/:studentId/enroll/', studentController.enrollStudent);
router.get('/students/:studentId/removeCourse/:courseId', studentController.removeCourse);
module.exports = router;
