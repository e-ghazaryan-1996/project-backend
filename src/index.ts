import express from 'express';
import sequelize from './config/index.js';
import helmet from 'helmet';
import limiter from './config/rate-limit.js';
import errorHandler from './middlewares/error-middleware.js';
import corsOptions from './config/cors.js';
import cors from 'cors';
import morganMiddleware from './middlewares/morgan-middleware.js';
import logger from './utils/logger.js';

const app = express();

app.use(helmet());
app.use(limiter);
app.use(cors(corsOptions));

app.use(errorHandler);
app.use(morganMiddleware);

sequelize
  .authenticate()
  .then(() => {
    logger.info('Database connection has been established successfully.');
  })
  .catch((err) => {
    logger.error('Unable to connect to the database:');
  });

app.listen(process.env.PORT, () => {
  logger.info(`Server is running on port ${process.env.PORT}`);
});
