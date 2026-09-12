import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import { ENV } from "./src/config/ENV.js";
import { ConnectDb } from "./src/config/connectdb.js";
import { userRouter } from "./src/routes/user.route.js";
import { logger } from "./src/middleware/logger.middleware.js";

const app = express()
app.use(logger)
app.use(express.json())
app.use(cookieParser())
app.use('/api',userRouter)

if (process.env.NODE_ENV !== 'test') {
    ConnectDb()
    app.listen(ENV.PORT, () => {
        console.log(`server running on port ${ENV.PORT}`)
    })
}

export default app