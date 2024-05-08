const express = require('express');
const router = express.Router();
const services = require('../modules/services');

router.use(express.json());

router.get('/get', async (req, res) => {
    services.getAllBooks(req, res);
});

router.post('/add', async (req, res) => {
    services.createBook(req, res);
});

router.put('/update/:id', async (req, res) => {
    services.updateBook(req, res);
});

router.delete('/delete/:id', async (req, res) => {
    services.deleteBook(req, res);
  });

module.exports = router;
