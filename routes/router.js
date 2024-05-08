const express = require('express');
const router = express.Router();
const services = require('../modules/services');
const { getAllBooks } = require('../modules/services');
const { createBook } = require('../modules/services');
const { updateBook } = require('../modules/services');
const { deleteBook } = require('../modules/services');

router.use(express.json());

router.get('/get', getAllBooks);

router.post('/add', createBook)

router.put('/update/:id', updateBook)

router.delete('/delete/:id', deleteBook)

module.exports = router;
