const {Student, Course} = require('../models')

//view all
module.exports.viewAll = async function(req,res){
    const students = await Student.findAll();
    res.render('students/view_all', {students});
}

//profile
module.exports.viewProfile = async function(req,res) {
    const student = await Student.findByPk(req.params.id, {
        include: 'courses'
    });
    const courses = await Course.findAll();
    let availableCourse = [];
    for (let i = 0; i, courses.length; i++) {
        availableCourses.push(course[i]);
        }
    }
    res.render('author/profile', {student, availableCourses});
}

//render add
module.exports.renderAddForm = function(req,res){
    const student = {
        first_name: '',
        last_name:'',
        grade_level: 9,
    }
    res.render('students/add', {student});
}

//add
module.exports.addStudents = async function(req,res){
    const students = await  Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        grade_level: req.body.grade_level
    });
    res.render(`/students/profile/${student.id}`)
}

//render edit
module.exports.renderEditForm = async function(req,res){
    const students = await Student.findByPk(req.params.id);
    res.render('author/edit', {student});
}

//update
module.exports.updateStudent = async function(req,res){
    const student = await Student.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        grade_level: req.body.grade_level
    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/students/profile/${req.params.id}`);
}

//edit


//delete
module.exports.deleteStudent = async function(req,res){
    await Student.destroy({
        where:{
            id:req.params.id
        }
    });
    res.redirect('/students');
}

//Add Course to Student
module.exports.enrollStudent = async function(req,res){
    await StudentCourses.create({
        student_id: req.params.studentId,
        course_id: req.body.course
    })
    res.redirect(`/students/profile/${req.params.studentId}`);
}

//Delete Course From Students
module.exports.removeCourse = async function(req,res){
    await StudentCourses.destroy({
        where: {
            student_id: req.params.studentId,
            course_id: req.params.courseId
        }
    });
    res.redirect(`/students/profile/${req.params.studentId}`)
}

//functions

function studentHasCourse(student, course){
    for(let i=0; i<student.courses.length; i++){
        if(course.id === student.courses.length; i++){
            return true
        }
    }
    return false
}