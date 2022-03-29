import { hashSync } from 'bcrypt'
import { Request, Response } from 'express'
import { Logger } from './Logger'

export const hashPassword = (password: string): string => {
    return hashSync(password, 10)
}

export const randomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const delay = async (ms: number): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1)
        }, ms)
    })
}

export const processError = (e, res: Response): Response => {
    let response: any = []
    let status = 400

    if (e.name) {
        switch (e.name) {
            case 'SequelizeUniqueConstraintError':
                Object.keys(e.fields).map((field) => {
                    response.push({
                        field: field,
                        message: `${field} "${e.fields[field]}" has already been taken`,
                    })
                })
                status = 422
                break
            default:
                Logger.log('error', JSON.stringify(e))
                status = 400
                response = {
                    name: 'Bad request',
                    message: '',
                    status: 400,
                }
                break
        }
    }

    return res.status(status).json(response)
}
