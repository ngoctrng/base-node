import express, { Application, Request, Response } from "express"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import compression from "compression"

const app: Application = express()

/** Setup middlewares */
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * demo routes
 */
app.get("/health", (req: Request, res: Response): void => {
    res.send("OK!")
})

export default app
