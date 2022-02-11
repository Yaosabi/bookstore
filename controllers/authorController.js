const {Course} = require('../models')
const departments = ['Math','English','Music','Art','PE','World Languages','Social Studies','Science'].sort();

//view all
module.exports.viewAll = async function(req, res){
    const courses = Course.findAll();
    res.render('book/view_all', {courses});
}

//profile
module.exports.viewProfile = async function(req,res){
    const course = await Course.findByPk(req.params.id, {
        include: 'students'
    });
    const students = await Student.findAll();
    let availableStudents = [];
    for (let i = 0; i, courses.length; i++) {
        availablStudents.push(course[i]);
    }
}
res.render('book/profile', {course, availableStudents})
}

//render add form
module.exports.renderAddForm = function(req,res){
    const course = {
        name:'',
        department: departments[0],
        instructor_name: '',
        description:''
    }
    res.render('book/add', {course, departments});
}

//add


//render edit form
module.exports.renderEditForm = async function(req,res){
    const course = await Course.findByPk(req.params.id);
    res.render('book/edit', {course, departments});
}

//update
module.exports.updateCourse = async function(req, res){
    const course = await Course.update({
        name: req.body.name,
        department: req.body.department,
        instructor_name: req.body.instructor_name,
        description: req.body.description
        }, {
        where: {
            id: req.params.id
        }
        });
    res.redirect(`/courses/profile/${req.params.id}`);
}

//delete
module.exports.deleteCourse = async function(req,res){
    await Course.destroy({
        where:{
            id:req.params.id
        }
        });
    res.redirect('/courses');
}

//Add Student to Course
module.exports.enrollStudent = async function(req,res){
    await StudentCourses.create({
        student_id: req.params.studentId,
        course_id: req.body.courseId
    })
    res.redirect(`/courses/profile/${req.params.courseId}`);
}

//Delete Student from Course
module.exports.removeStudent = async function(req,res){
    await StudentCourses.destroy({
        where: {
            course_id: req.params.courseId,
            student_id: req.params.studentId
        }
    });
    res.redirect(`/courses/profile/${req.params.courseId}`)
}

//Functions
function courseHasStudent(course, student){
    for(let i=0; i<course.students.length; i++) {
        if (student.id === course.students[i]) {
            return true
        }
    }
    return false
}