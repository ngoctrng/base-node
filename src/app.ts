import express, { Application, Request, Response } from "express"

const app: Application = express()

/**
 * demo routes
 */
app.get("/health", (req: Request, res: Response): void => {
    res.send("demo-service:OK")
})

export default app
