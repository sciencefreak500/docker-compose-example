const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/random', (req, res) => {
	res.send("Random #" + Math.floor(Math.random()*10).toString())
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
