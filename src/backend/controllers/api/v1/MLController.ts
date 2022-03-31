import { Request, Response } from 'express'
import { exec } from 'child_process'

const test = async (req: Request, res: Response) => {
    try {
        exec('ls -la', (error, stdout, stderr) => {
            console.log(stdout)
            return res.status(200).json(stdout)
        })
    } catch (e) {
        return res.status(400).json({ error: 'Bad request' })
    }
}

export { test }
