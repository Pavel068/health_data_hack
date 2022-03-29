import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { routes } from './routes/b-api'
import { APIRoutes } from './routes/api'
import _init from './models'
import { Logger } from './services/Logger'

dotenv.config()

const { NODE_ENV, NODE_HOST, NODE_PORT } = process.env
if (!NODE_ENV || !NODE_HOST || !NODE_PORT) {
    process.exit(1)
}

const app = express()
app.use(cors())
app.use(express.json())

app.use('/b-api', routes)
app.use('/api/v1', APIRoutes)

app.listen(parseInt(NODE_PORT), async () => {
    await _init()
    Logger.log('info', `Server running on port ${NODE_PORT}`)
})
