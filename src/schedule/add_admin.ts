import { User } from '../backend/models/User'
import { hashPassword } from '../backend/services/Helper'

async function add() {
    try {
        await User.create({
            email: 'admin@test.com',
            password: hashPassword('pa$$123'),
            is_admin: true,
        })
        console.log('New admin added!')
        process.exit(0)
    } catch (error) {
        console.error(error)
    }
}

;(async () => {
    await add()
})()
