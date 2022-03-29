import { Request, Response } from 'express'
import { User } from '../../models/User'
import { compareSync } from 'bcrypt'
import { JWT } from '../../services/JWT'
import { hashPassword } from '../../services/Helper'

const auth = async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            error: 'Bad request',
        })
    }

    const admin = (await User.findOne({ where: { email } }))?.get()
    if (!admin) {
        return res.status(401).json({
            error: 'Unauthorized',
        })
    }

    if (!admin.password || !compareSync(password, admin.password)) {
        return res.status(401).json({
            error: 'Unauthorized',
        })
    }

    const token = JWT.sign({ admin })

    return res.status(200).json({ token, admin })
}

const register = async (req: Request, res: Response) => {}

export { auth, register }
