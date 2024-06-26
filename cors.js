const express = require('express')
const cors = require('cors')
const app = express()

// Enable all CORS requests
app.use(cors())

app.get('/', (req, res) => {
    res.send('CORS enabled for all origins!')
})

const PORT = 3013
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))