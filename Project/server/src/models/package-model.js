import { DataTypes, sequelize } from '../database/database.config.js';

const PackageModel = sequelize.define(
    'Package',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            required: true,
        },
        description: {
            type: DataTypes.TEXT,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'packages',
        timestamps: false, // відключення генерації полів createdAt і updatedAt
    },
);

export default PackageModel;
