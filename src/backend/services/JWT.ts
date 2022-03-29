import dotenv from 'dotenv'
import { sign, verify } from 'jsonwebtoken'

dotenv.config()

const { JWT_SECRET } = process.env
if (!JWT_SECRET) {
    process.exit(1)
}

export const JWT = {
    sign(data: { admin }): string {
        return sign(data, JWT_SECRET)
    },
    verify(token: string) {
        return verify(token, JWT_SECRET)
    },
}
