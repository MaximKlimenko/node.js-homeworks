const express = require('express')
const { v4: uuid } = require('uuid')

const login = require('./routes/login')
const doBook = require('./routes/doBook')
const download = require('./routes/download')
const err404 = require('./middleware/err-404')

const app = express()

app.use(express.json())

app.use('/', doBook)
app.use('/api/books/:id/download', download)
app.use('/api/user/login', login)
app.use(err404)

const PORT = process.env.PORT || 4000
app.listen(PORT)
