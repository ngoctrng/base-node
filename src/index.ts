import app from "./app"
import http from "http"

const PORT = process.env.PORT || 3000

/**
 * Create server
 */
const server = http.createServer(app)

/**
 * Start server
 */
server.listen(PORT, (): void => {
    console.log(`Server running at port ${PORT}`)
})