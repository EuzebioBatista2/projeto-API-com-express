const port = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/products', (req, res, next) => {
    res.send(bancoDeDados.getProducts())
})

app.get('/products/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
    const product = bancoDeDados.productSave({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // JSON
})

app.put('/products/:id', (req, res, next) => {
    const product = bancoDeDados.productSave({
        name: req.body.name,
        price: req.body.price,
        id: req.params.id
    })
    res.send(product) // JSON
})

app.delete('/products/:id', (req, res, next) => {
    const product = bancoDeDados.deleteProduct(req.params.id)
    res.send(product) // JSON
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})