const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/random', (req, res) => res.send(Math.floor(Math.random()*10)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
