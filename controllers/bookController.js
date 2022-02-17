const {Book, Author} = require('../models')

//view all
module.exports.viewAll = async function(req,res){
    const authors = await Author.findAll();
    res.render('authors/view_all', {authors});
}

//profile
module.exports.viewProfile = async function(req,res) {
    const author = await Student.findByPk(req.params.id, {
        include: 'courses'
    });
    const books = await Course.findAll();
    let availableBook = [];
    for (let i = 0; i, books.length; i++) {
        availableBooks.push(book[i]);
        }
    }
    res.render('author/profile', {author, availableBooks});
}

//render add
module.exports.renderAddForm = function(req,res){
    const author = {
        first_name: '',
        last_name:'',
        grade_level: 9,
    }
    res.render('students/add', {author});
}

//add
module.exports.addAuthors = async function(req,res){
    const authors = await  Author.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        grade_level: req.body.grade_level
    });
    res.render(`/authors/profile/${author.id}`)
}

//render edit
module.exports.renderEditForm = async function(req,res){
    const authors = await Author.findByPk(req.params.id);
    res.render('author/edit', {author});
}

//update
module.exports.updateAuthor = async function(req,res){
    const author = await Student.update({
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
module.exports.deleteAuthor = async function(req,res){
    await Author.destroy({
        where:{
            id:req.params.id
        }
    });
    res.redirect('/authors');
}

//Add Book to Author
module.exports.addAuthor = async function(req,res){
    await AuthorBooks.create({
        author_id: req.params.authorId,
        book_id: req.body.bookId
    })
    res.redirect(`/authors/profile/${req.params.authorId}`);
}

//Delete Book From Authors
module.exports.removeBook = async function(req,res){
    await AuthorBooks.destroy({
        where: {
            author_id: req.params.authorId,
            book_id: req.params.bookId
        }
    });
    res.redirect(`/authors/profile/${req.params.authorId}`)
}

//functions

function authorHasBook(author, book){
    for(let i=0; i<author.books.length; i++){
        if(book.id === author.books.length; i++){
            return true
        }
    }
    return false
}