import express from "express"

const app = express()

// -- MIDDLEWARE --
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json())



// this needs to be below the other code blocks
app.listen(5000, () => console.log("Server is Running and ready for REQ and RES " + 5000))