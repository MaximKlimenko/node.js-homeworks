const express = require('express')
const { v4: uuid } = require('uuid')

class Book {
    constructor(id=uuid(), title="", description="", authors="", favorite="", fileCover="", fileName="") {
        this.id = id
        this.title = title
        this.description = description
        this.authors = authors
        this.favorite = favorite
        this.fileCover = fileCover
        this.fileName = fileName
    }
}

const stor = {
    books: []
}

const app = express()
app.use(express.json())

app.get('/api/books', (req, res) => {
    const {books} = stor
    res.json(books)
})
app.get('/api/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const index = books.findIndex(el => el.id === id)

    if (index !== -1) {
        res.json(books[index])
    } else {
        res.status(404)
        res.json('404! Такой книги не сущесвтует!')
    }
})
app.post('/api/user/login', (req, res) => {
    res.status(201)
    res.json({ id: 1, mail: "test@mail.ru" })
})
app.post('/api/books', (req, res) => {
    const {books} = stor
    const {title, desc} = req.body

    const newBook = new Book(title, desc)
    books.push(newBook)

    res.status(201)
    res.json(newBook)
})
app.put('/api/books/:id', (req, res) => {
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
        res.json('404! Такой книги не сущесвтует!')
    }
})
app.delete('/api/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const index = books.findIndex(el => el.id === id)

    if (index !== -1) {
        books.splice(index, 1)
    } else {
        res.status(404)
        res.json('404! Такой книги не сущесвтует!')
    }
})
const PORT = process.env.PORT || 4000
app.listen(PORT)