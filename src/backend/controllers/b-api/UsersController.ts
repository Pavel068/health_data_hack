import { Request, Response } from 'express'
import { User } from '../../models/User'
import * as crypto from 'crypto'

const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll({
        where: {
            is_admin: false,
        },
    })

    return res.status(200).json(users)
}

const addUser = async (req: Request, res: Response) => {
    const { name, email } = req.body

    try {
        const user = await User.create({
            name,
            email,
            is_admin: false,
            access_token: crypto.randomBytes(48).toString('hex'),
        })
        return res.status(201).json(user)
    } catch (e) {
        return res.status(400).json({ error: 'Bad request' })
    }
}

const removeUser = async (req: Request, res: Response) => {
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ error: 'Bad request' })
    }

    try {
        await User.destroy({ where: { id } })
        return res.sendStatus(204)
    } catch (e) {
        return res.status(400).json({ error: 'Bad request' })
    }
}

export { getUsers, addUser, removeUser }
