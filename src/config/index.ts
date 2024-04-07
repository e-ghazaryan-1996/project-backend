import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DBUSERNAME,
  process.env.DBPASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

export default sequelize;
