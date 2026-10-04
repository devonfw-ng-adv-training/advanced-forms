import express from 'express';
import { readFileSync } from 'fs';
import { max, map, isString } from 'lodash-es';

const books = JSON.parse(readFileSync(new URL('./books.json', import.meta.url), 'utf-8').toString());

function* idSequence(initial) {
  let i = initial;
  while (true) { yield i++; } // eslint-disable-line no-constant-condition, no-plusplus
}

const booksIdGen = idSequence(max(map(books, 'id')) + 1);

const isBook = (book) => !!book && !!book.title && isString(book.title)
  && !!book.author && isString(book.author)
  && !!book.isbn && isString(book.isbn);
const hasBook = (req, res, next) => {
    if (isBook(req.body)) {
        next();
    } else {
        res.status(404).json({ error: 'invalid payload structure' });
    }
};
const byId = (id) => (book) => book.id === +id;


 // ----------  EXPRESS ----------

const app = express();
app.use(express.json());

app.get('/api/book', (req, res) => {
    res.json(books);
  }
);

app.get('/api/book/:id', (req, res) => {
    const book = books.find(byId(req.params.id));
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'book not found' });
    }
  }
);

app.listen(9100, (error) => {
  // Express 5 passes listen errors (e.g. EADDRINUSE) to the callback instead of throwing
  if (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
  console.log('Server listening on port 9100!');
});

app.post('/api/book', hasBook, (req, res) => {
    if (req.body.id) {
        const book = books.find(byId(req.body.id));
        if (book) {
            const updatedBook = req.body;
            Object.assign(book, updatedBook);
            res.json(book);
        } else {
            res.status(404).json({ error: 'book not found' });
        }
    } else {
        const newBook = req.body;
        newBook.id = booksIdGen.next().value;
        books.push(newBook);
        res.json(newBook);
    }
});
