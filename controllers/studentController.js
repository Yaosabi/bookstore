const {Student, Course} = require('../models')

//view all
module.exports.viewAll = async fucntion(req,res){
    const students = await Student.findAll();
    res.render('students/view_all', {students});
}

//profile
module.exports.viewProfile = async function(req,res){
    const student = await Student.findByPk(req.params.id, {
        include: 'courses'
    });
    res.render('student/profile', {student})
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
    res.render('student/edit', {student});
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