const express = require('express')
const router = express.Router()
const { v4: uuid } = require('uuid')

class Book {
    constructor(id=uuid(), title="", description="", authors="", favorite=false, fileCover="", fileName="", fileBook="") {
        this.id = id
        this.title = title
        this.description = description
        this.authors = authors
        this.favorite = favorite
        this.fileCover = fileCover
        this.fileName = fileName
    }
}

const book1 = new Book('123', 'title', 'desc', 'Pushkin', true, 'fileCover', 'image.png', 'books')

const stor = {
    books: [book1]
}

router.get('/api/books', (req, res) => {
    const {books} = stor
    res.json(books)
})
router.post('/api/books', (req, res) => {
    const {books} = stor
    const {title, desc} = req.body

    const newBook = new Book(title, desc)
    books.push(newBook)

    res.status(201)
    res.json(newBook)
})

router.put('/api/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const {title, desc} = req.body
    const index = books.findIndex(el => el.id === id)

    if (index !== -1) {
        books[index] = {
            ...books[index],
            title,
            desc
        }

        res.json(books[index])
    } else {
        res.status(404)
        res.json({"Error": "404! Такой книги не сущесвтует!"})
    }
})
router.delete('/api/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const index = books.findIndex(el => el.id === id)

    if (index !== -1) {
        books.splice(index, 1)
    } else {
        res.status(404)
        res.json({"Error": "404! Такой книги не сущесвтует!"})
    }
})
router.get('/api/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const index = books.findIndex(el => el.id === id)

    if (index !== -1) {
        res.json(books[index])
    } else {
        res.status(404)
        res.json({"Error": "404! Такой книги не сущесвтует!"})
    }
})
router.get('/api/books/:id/download', (req, res) => {
    express.static('/download')
})
module.exports = router