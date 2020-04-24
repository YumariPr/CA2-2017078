
'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Function Add
app.get('/api/product/:productId', (req, res) => {
res.send(200,{product: []})
})

app.post('/api/product/:productId', (req, res) => {
    console.log(req.body)
    res.send(200, {message: 'The product is'})
})



//Fuction Delete
app.delete('/api/product/:productId', (req, res) => {

})


app.listen(port, () => {
    console.log('API REST is running in http://localhost:${port}')
})
