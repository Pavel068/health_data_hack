import { Request, Response } from 'express'
import { User } from '../../../models/User'
import * as crypto from 'crypto'
import { compareSync } from 'bcrypt'
import { processError } from '../../../services/Helper'

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        let user = await User.findOne({ where: { email } })
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized', msg: 'Wrong email or password' })
        }

        const userPassword: any = user!.get('password')
        if (compareSync(password, userPassword)) {
            user.set('access_token', crypto.randomBytes(64).toString('hex'))
            await user.save()
            await user.reload()

            delete user?.get().password
            return res.status(200).json(user)
        } else {
            return res.status(401).json({
                error: 'Unauthorized',
                msg: 'Wrong email or password',
            })
        }
    } catch (e) {
        return processError(e, res)
    }
}

const getMe = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({
            where: { access_token: req.authorizedUser!.access_token },
        })
        delete user?.get().password
        return res.status(200).json(user)
    } catch (e) {
        return processError(e, res)
    }
}

export { login, getMe }
