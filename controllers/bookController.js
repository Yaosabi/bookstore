const {Book, Author} = require('../models')

//view all
module.exports.viewAll = async function(req,res){
    const authors = await Author.findAll();
    res.render('authors/view_all', {authors});
}

//profile
module.exports.viewProfile = async function(req,res) {
    const author = await Author.findByPk(req.params.id, {
        include: 'books'
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
        firstname: '',
        lastname:'',
        books: '',
        dob: [0],
    }
    res.render('authors/add', {author});
}

//add
module.exports.addAuthors = async function(req,res){
    const authors = await  Author.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        books: req.body.books,
        dob: req.body.dob
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
    const author = await Author.update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        books: req.body.books,
        dob: req.body.dob
    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/authors/profile/${req.params.id}`);
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