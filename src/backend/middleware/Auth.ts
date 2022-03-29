import { Request, Response, NextFunction } from 'express'
import { User } from '../models/User'

export const Authorized = async (req: Request, res: Response, next: NextFunction) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer' &&
        req.headers.authorization.split(' ')[1]
    ) {
        const access_token = req.headers.authorization.split(' ')[1]
        const user = (await User.findOne({ where: { access_token } }))?.get()
        if (user) {
            // @ts-ignore
            req.authorizedUser = user
            next()
        } else {
            res.status(401).json({ error: 'Unauthorized' })
        }
    } else {
        res.status(401).json({ error: 'Unauthorized' })
    }
}
