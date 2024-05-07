const express = require('express');
const router = express.Router();
const Book = require('../model/books');

router.use(express.json());

router.get('/get', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/add', async (req, res) => {
    const { title, author } = req.body;
    try {
        const newBook = await Book.create({ title, author });
        res.status(201).json(newBook);
    } catch (error) {
        console.error('Error creating book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/add/:id', async (req, res) => {
    const bookId = req.params.id;
    const { title, author } = req.body;

    try {
        const book = await Book.findByPk(bookId);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        book.title = title;
        book.author = author;
        await book.save();
        res.json(book);
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/delete/:id', async (req, res) => {
    const bookId = req.params.id;
  
    try {
      const book = await Book.findByPk(bookId);
  
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      await book.destroy();
      res.json({ message: 'Book deleted successfully' });
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;
