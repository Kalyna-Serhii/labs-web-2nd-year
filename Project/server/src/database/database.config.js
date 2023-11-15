import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('webapp', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false, // відключення виведення SQL запитів до терміналу
});

(async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error('Не вдалося підключитися до бази даних:', error);
  }
  try {
    await sequelize.sync({ alter: true, paranoid: true });
    // await sequelize.sync({ force: true, paranoid: true });
    // Примусово оновлює БД, ФОРМАТУЮЧИ її
  } catch (error) {
    console.error('Не вдалося виконати синхронізацію в базі даних:', error);
  }
})();

export { sequelize, DataTypes };
