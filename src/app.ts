import express, { Application, Request, Response } from "express"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import compression from "compression"

class App {

    private _app: Application;

    constructor() {
        this._app = express();

        /** Setup middlewares */
        this.middlewares()

        /** Setup routes */
        this.routes()
    }

    get app(): Application {
        return this._app;
    }

    private middlewares(): void {
        /** Setup middlewares */
        this._app.use(cors())
        this._app.use(helmet())
        this._app.use(compression())
        this._app.use(morgan('dev'))
        this._app.use(express.json())
        this._app.use(express.urlencoded({ extended: true }))
    }

    private routes(): void {
        /** demo routes */
        this._app.get("/health", (req: Request, res: Response): void => {
            res.send("OK!")
        })
    }
}

export default new App().app;
