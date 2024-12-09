import express from 'express';
import dbConnect from './config/config.mongo.js';
import router from "./routes/cake.routes.js"
import cors from "cors"
const app = express()

// const PORT = 5000
const PORT = process.env.PORT
// -- MIDDLEWARE --
app.use(express.json(), cors())
app.use("/api", router)

dbConnect()




app.listen(PORT, () =>
    console.log(`>>>>>> Listening on port: ${PORT} ✅✅`)
);



