import express from 'express';
import sequelize from './config/index.js';
import helmet from 'helmet';
import limiter from './config/rate-limit.js';
import errorHandler from './middlewares/error-middleware.js';
import corsOptions from './config/cors.js';
import cors from 'cors';

const app = express();

app.use(helmet());
app.use(limiter);
app.use(cors(corsOptions));

app.use(errorHandler);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
});
