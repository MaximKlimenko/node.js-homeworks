module.exports = (req, res) => {
    res.status(404)
    res.json({'Error': '404 | страница не найдена!'})
}