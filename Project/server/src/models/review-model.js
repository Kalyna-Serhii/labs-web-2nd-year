import {DataTypes, sequelize} from '../database/database.config.js';

const ReviewModel = sequelize.define(
    'Review',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: 'reviews',
        timestamps: false, // відключення генерації полів createdAt і updatedAt
    },
);

export default ReviewModel;