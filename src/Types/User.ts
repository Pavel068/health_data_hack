import { Optional } from 'sequelize/types'

export interface UserAttributes {
    readonly id: number
    name?: string
    email: string
    password?: string
    access_token?: string
    is_admin: boolean
}

export type UserRequiredAttributes = Optional<UserAttributes, 'id'>
