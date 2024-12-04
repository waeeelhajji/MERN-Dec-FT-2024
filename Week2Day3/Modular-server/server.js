import express from "express"
import router from "./routes/user.routes.js"
const app = express()
const PORT = 5000

// -- MIDDLEWARE --
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json())


//routes
app.use("/api", router)






// this needs to be below the other code blocks
app.listen(PORT, () => console.log(`Server is Running and ready for REQ and RES ${PORT}`))
