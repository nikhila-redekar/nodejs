const express = require('express')
const app = express()
const usersRouter = require('./routes/usersRouter')

app.use('/users', usersRouter)

const PORT = 3013
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))