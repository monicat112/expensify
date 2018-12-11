const path = require('path')
const express = require('express')
const app = express() // create an express app
const publicPath = path.join(__dirname, '..', 'public')
// if process.env.PORT exists, that means we're running on heroku
// otherwise we can default to port 3001
const port = process.env.PORT || 3001

// registers middleware (which runs every time we make a request)
app.use(express.static(publicPath))

// if our path (like /create) isn't in the public folder, just use index
app.get('*', (req, res) => { // request and response
    // process unhandled requests
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log('Server is up at localhost:3001')
})
