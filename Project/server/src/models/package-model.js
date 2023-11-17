import {DataTypes, sequelize} from '../database/database.config.js';

const PackageModel = sequelize.define(
    'Package',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
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