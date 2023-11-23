import {DataTypes, sequelize} from '../database/database.config.js';

const DealModel = sequelize.define(
    'Deal',
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
        carId: {
            type: DataTypes.INTEGER,
        },
        packageId: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    },
    {
        tableName: 'deals',
        timestamps: false, // відключення генерації полів createdAt і updatedAt
    }
);

export default DealModel;