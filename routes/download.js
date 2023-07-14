const express = require('express')
const router = express.Router()
const fileMulter = require('../middleware/file')

router.get('/api/books/:id/download',
    (req, res) => {
    const { books } = stor
    const { id } = req.params
    const book = books.find(book => book.id === id)
    if (book && books[book].fileBook) {
        res.download(books[book].fileBook, books[book].fileName)
    } else {
        res.status(404)
        res.json({"Error": "404! Такой книги не сущесвтует!"})
    }
    })

module.exports = router