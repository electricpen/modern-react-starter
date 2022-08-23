const express = require('express')

const app = express()

const portNumber = 3001

app.use(express.static('client/dist'))

app.listen(portNumber, (error) => {
    if(error) {
        console.error("Could not start server:", error)
    } else {
        console.log("Server started on port:", portNumber)
    }
})