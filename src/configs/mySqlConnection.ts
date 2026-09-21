import { Sequelize } from 'sequelize';
import config from './config';
import logger from './logger';

// Create connection object
const sequelize = new Sequelize(
  config.databases.central.db,
  config.databases.central.user,
  config.databases.central.passwd,
  {
    host: config.databases.central.host,
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8mb4',
    },
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
    logging: process.env.NODE_ENV === 'production' ? false : console.log,
    define: {
      collate: 'utf8mb4_unicode_ci',
    },
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info('Primary MySQL Database Connection has been established successfully 😊.');
  } catch (error) {
    logger.warn('Unable to connect to the Primary MySQL Database 🥺 :', error);
  }
};

connectDB();

export default sequelize;
