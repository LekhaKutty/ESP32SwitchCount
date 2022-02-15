const express = require('express')
const cors = require("cors");
const api_helper = require('./API_helper')
const app = express()
const port = 8080

app.use(cors());

//app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))
app.get('/', (req, res) => {
    api_helper.make_API_call('http://192.168.1.143/')
    .then(response => {
        res.json(response)
        console.log(response)
    })
    .catch(error => {
        res.send(error)
        console.log(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
