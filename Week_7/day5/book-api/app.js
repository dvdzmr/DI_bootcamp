const express = require('express');
const app = express();
const port = 3000;

const books = [
    {id:1 ,title:'Harry Potter', author:'J. K. Rowling'},
    {id:2 ,title:'Lord of the Rings', author:'J. R. R. Tolkien'},
    {id:3 ,title:'The Hobbit', author:'J. R. R. Tolkien'}
];

app.use(express.json());

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id == id);

    if(!book) {
        res.status(404).send('Book not found');
    }

    res.json(book);
});

app.post('/books', (req, res) => {
    const {title, author} = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author
    };
    books.push(newBook);
    res.json(newBook);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});