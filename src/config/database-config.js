import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const config = {
  host: process.env.HOST,
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
  dialect:  "mysql",
  pool: {
    max: process.env.DB_POOL_MAX || 5,
    min: process.env.DB_POOL_MIN || 0,
    acquire: process.env.DB_POOL_ACQUIRE || 30000,
    idle: process.env.DB_POOL_IDLE || 10000,
  },
};

export default config;
