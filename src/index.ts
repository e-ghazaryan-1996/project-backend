import express from 'express';
import sequelize from './config/index.js';

const app = express();

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
