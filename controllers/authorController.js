const {Book} = require('../models')
const genres = ['Fiction', 'Nonfiction'].sort();

//view all
module.exports.viewAll = async function(req, res){
    const books = Book.findAll();
    res.render('book/view_all', {books});
}

//profile
module.exports.viewProfile = async function(req,res){
    const book = await Book.findByPk(req.params.id, {
        include: 'authors'
    });
    const authors = await Author.findAll();
    let availableAuthors = [];
    for (let i = 0; i, books.length; i++) {
        availableAuthors.push(book[i]);
    }
}
res.render('book/profile', {books, availableAuthors})
}

//render add form
module.exports.renderAddForm = function(req,res){
    const book = {
        title:'',
        pages: '',
        publisher: '',
        image: '',
        genre: genres[0],
        authors: '',
        description:''
    }
    res.render('book/add', {author, genres});
}

//add


//render edit form
module.exports.renderEditForm = async function(req,res){
    const book = await Book.findByPk(req.params.id);
    res.render('book/edit', {author, genres});
}

//update
module.exports.updateBook = async function(req, res){
    const book = await Book.update({
        title: req.body.title,
        pages: req.body.pages,
        publisher: req.body.publisher,
        image: req.body.image,
        genre: req.body.genre,
        authors: req.body.authors,
        description: req.body.description
        }, {
        where: {
            id: req.params.id
        }
        });
    res.redirect(`/books/profile/${req.params.id}`);
}

//delete
module.exports.deleteBook = async function(req,res){
    await Book.destroy({
        where:{
            id:req.params.id
        }
        });
    res.redirect('/books');
}

//Add Author to Book
module.exports.enrollAuthor = async function(req,res){
    await AuthorBooks.create({
        author_id: req.params.authorId,
        book_id: req.body.bookId
    })
    res.redirect(`/books/profile/${req.params.bookId}`);
}

//Delete Author from Book
module.exports.removeAuthor = async function(req,res){
    await AuthorBooks.destroy({
        where: {
            book_id: req.params.bookId,
            author_id: req.params.authorId
        }
    });
    res.redirect(`/books/profile/${req.params.bookId}`)
}

//Functions
function bookHasAuthor(book, author){
    for(let i=0; i<book.authors.length; i++) {
        if (author.id === book.authors[i]) {
            return true
        }
    }
    return false
}