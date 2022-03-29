import sequelize from '../services/Sequelize'

import { User } from './User'

const _init = async () => {
    await User.sync()

    await sequelize.sync({
        alter: true,
        force: false,
    })
}

export default _init
