import { UserAttributes } from '../Types/User'

declare global {
    namespace Express {
        export interface Request {
            authorizedUser?: UserAttributes
        }
    }
}
