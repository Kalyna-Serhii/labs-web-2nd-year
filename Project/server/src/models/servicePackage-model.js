import { sequelize } from '../database/database.config.js';
import serviceModel from "./service-model.js";
import packageModel from "./package-model.js";

const servicePackageModel = sequelize.define(
    'ServicePackage',
    {},
    {
        tableName: 'services_packages',
        timestamps: false, // відключення генерації полів createdAt і updatedAt
    },
);

packageModel.belongsToMany(serviceModel, {through: servicePackageModel});
serviceModel.belongsToMany(packageModel, {through: servicePackageModel});

export default servicePackageModel;