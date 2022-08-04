const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    console.log(req.body)
    
    if (username === 'admin' && password === 'admin') {
        res.send({})
    } else {
        res.status(401).send({
            message: 'login failed',
        })
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
