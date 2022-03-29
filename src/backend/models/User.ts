import sequelize from '../services/Sequelize'
import { Model, DataTypes, Optional } from 'sequelize'
import { UserAttributes, UserRequiredAttributes } from '../../Types/User'

export const User = sequelize.define<Model<UserAttributes, UserRequiredAttributes>>(
    'User',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(255),
            allowNull: true,
        },
        email: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(255),
            allowNull: true,
        },
        access_token: {
            type: new DataTypes.STRING(255),
            allowNull: true,
        },
        is_admin: {
            type: new DataTypes.BOOLEAN(),
            allowNull: false,
        },
    },
    {
        tableName: 'users',
        indexes: [{ fields: ['email'], unique: true }],
        timestamps: true,
        underscored: true,
    }
)
